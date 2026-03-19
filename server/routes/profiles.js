import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getDB } from '../db/connection.js';
import { isAuthenticated } from '../auth/middleware.js';

const router = Router();

router.get('/me', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();
    const profile = await db
      .collection('profiles')
      .findOne({ userId: req.user._id.toString() });

    if (!profile) {
      return res.status(404).json({ error_error: 'Profile not found' });
    }

    res.json(profile);
  } catch (_error) {
    res.status(500).json({ error_error: 'Failed to fetch profile' });
  }
});

router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const profiles = await db.collection('profiles').find({}).toArray();
    res.json(profiles);
  } catch (_error) {
    res.status(500).json({ error_error: 'Failed to fetch profiles' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const db = getDB();
    const profile = await db
      .collection('profiles')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!profile) {
      return res.status(404).json({ error_error: 'Profile not found' });
    }

    res.json(profile);
  } catch (_error) {
    res.status(500).json({ error_error: 'Failed to fetch profile' });
  }
});

router.post('/', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();
    const {
      name,
      email,
      skills,
      researchInterests,
      gpaRange,
      availability,
      resume_url,
    } = req.body;

    if (!name || !email || !skills) {
      return res
        .status(400)
        .json({ error_error: 'Name, email, and skills are required' });
    }

    const existing = await db
      .collection('profiles')
      .findOne({ userId: req.user._id.toString() });

    if (existing) {
      return res
        .status(409)
        .json({ error_error: 'Profile already exists. Use edit instead.' });
    }

    const newProfile = {
      userId: req.user._id.toString(),
      name,
      email,
      skills: Array.isArray(skills)
        ? skills
        : skills.split(',').map((s) => s.trim()),
      researchInterests: researchInterests || [],
      gpaRange: gpaRange || '',
      availability: availability || '',
      resume_url: resume_url || '',
      createdAt: new Date(),
    };

    const result = await db.collection('profiles').insertOne(newProfile);
    res.status(201).json({ ...newProfile, _id: result.insertedId });
  } catch (_error) {
    res.status(500).json({ error_error: 'Failed to create profile' });
  }
});

router.put('/:id', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();

    const existingProfile = await db
      .collection('profiles')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!existingProfile) {
      return res.status(404).json({ error_error: 'Profile not found' });
    }

    if (existingProfile.userId !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error_error: 'You can only edit your own profile' });
    }

    const {
      name,
      email,
      skills,
      researchInterests,
      gpaRange,
      availability,
      resume_url,
    } = req.body;

    const updatedProfile = {
      name,
      email,
      skills: Array.isArray(skills)
        ? skills
        : skills.split(',').map((s) => s.trim()),
      researchInterests: Array.isArray(researchInterests)
        ? researchInterests
        : (researchInterests || '').split(',').map((s) => s.trim()),
      gpaRange: gpaRange || '',
      availability: availability || '',
      resume_url: resume_url || '',
      updatedAt: new Date(),
    };

    await db
      .collection('profiles')
      .updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: updatedProfile },
      );

    res.json({ ...updatedProfile, _id: req.params.id });
  } catch (_error) {
    res.status(500).json({ error_error: 'Failed to update profile' });
  }
});

router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();

    const existingProfile = await db
      .collection('profiles')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!existingProfile) {
      return res.status(404).json({ error_error: 'Profile not found' });
    }

    if (existingProfile.userId !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error_error: 'You can only delete your own profile' });
    }

    await db
      .collection('profiles')
      .deleteOne({ _id: new ObjectId(req.params.id) });

    res.json({ message: 'Profile deleted successfully' });
  } catch (_error) {
    res.status(500).json({ error_error: 'Failed to delete profile' });
  }
});

export default router;
