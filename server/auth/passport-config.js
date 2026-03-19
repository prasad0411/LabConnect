import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';
import { getDB } from '../db/connection.js';

function configurePassport() {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        try {
          const db = getDB();
          const user = await db.collection('users').findOne({ email });

          if (!user) {
            return done(null, false, { message: 'No account with that email' });
          }

          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) {
            return done(null, false, { message: 'Incorrect password' });
          }

          return done(null, {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          });
        } catch (error) {
          return done(error);
        }
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user._id.toString());
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const db = getDB();
      const user = await db
        .collection('users')
        .findOne({ _id: new ObjectId(id) });

      if (!user) {
        return done(null, false);
      }

      done(null, {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } catch (error) {
      done(error);
    }
  });
}

export default configurePassport;
