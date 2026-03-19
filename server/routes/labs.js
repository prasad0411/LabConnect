import express from 'express';
import { ObjectId } from 'mongodb';
import { getDB } from '../db/connection.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const { department, skill, funding, search } = req.query;
    const filter = {};
    if (department) filter.department = department;
    if (skill) filter.skills_needed = { $regex: skill, $options: 'i' };
    if (funding) filter.funding_status = funding;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { professor: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }
    const labs = await db.collection('labs').find(filter).toArray();
    res.json(labs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const db = getDB();
    const lab = await db
      .collection('labs')
      .findOne({ _id: new ObjectId(req.params.id) });
    if (!lab) return res.status(404).json({ error: 'Lab not found' });
    res.json(lab);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const db = getDB();
    const newLab = {
      name: req.body.name,
      professor: req.body.professor,
      department: req.body.department,
      description: req.body.description,
      skills_needed: req.body.skills_needed || [],
      openings: req.body.openings || 0,
      funding_status: req.body.funding_status || 'unfunded',
      website: req.body.website || '',
      created_at: new Date(),
    };
    const result = await db.collection('labs').insertOne(newLab);
    res.status(201).json({ _id: result.insertedId, ...newLab });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const db = getDB();
    const updates = { ...req.body };
    delete updates._id;
    const result = await db
      .collection('labs')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates });
    if (result.matchedCount === 0)
      return res.status(404).json({ error: 'Lab not found' });
    res.json({ message: 'Lab updated', modifiedCount: result.modifiedCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const db = getDB();
    const result = await db
      .collection('labs')
      .deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0)
      return res.status(404).json({ error: 'Lab not found' });
    res.json({ message: 'Lab deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
