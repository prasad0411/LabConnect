import { Router } from 'express';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import { getDB } from '../db/connection.js';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const db = getDB();
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const existing = await db.collection('users').findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      role: role === 'professor' ? 'professor' : 'student',
      createdAt: new Date(),
    };

    const result = await db.collection('users').insertOne(newUser);

    req.login(
      { _id: result.insertedId, name, email, role: newUser.role },
      (err) => {
        if (err) {
          return res.status(500).json({ error: 'Registration succeeded but login failed' });
        }
        return res.status(201).json({
          _id: result.insertedId,
          name,
          email,
          role: newUser.role,
        });
      },
    );
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'Login failed' });
    }
    if (!user) {
      return res.status(401).json({ error: info?.message || 'Invalid credentials' });
    }
    req.login(user, (loginErr) => {
      if (loginErr) {
        return res.status(500).json({ error: 'Login failed' });
      }
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ message: 'Logged out successfully' });
  });
});

router.get('/me', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role,
  });
});

export default router;