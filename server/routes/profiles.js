import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getDB } from '../db/connection.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const profiles = await db.collection('profiles').find({}).toArray();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profiles' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const db = getDB();
    const profile = await db
      .collection('profiles')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

router.post('/', async (req, res) => {
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
        .json({ error: 'Name, email, and skills are required' });
    }

    const newProfile = {
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
  } catch (error) {
    res.status(500).json({ error: 'Failed to create profile' });
  }
});

router.put('/:id', async (req, res) => {
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

    const result = await db
      .collection('profiles')
      .updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: updatedProfile },
      );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.json({ ...updatedProfile, _id: req.params.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const db = getDB();
    const result = await db
      .collection('profiles')
      .deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete profile' });
  }
});

export default router;
