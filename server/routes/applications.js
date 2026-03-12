import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getDB } from '../db/connection.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const filter = {};

    if (req.query.labId) {
      filter.labId = req.query.labId;
    }

    if (req.query.profileId) {
      filter.profileId = req.query.profileId;
    }

    const applications = await db
      .collection('applications')
      .find(filter)
      .toArray();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const db = getDB();
    const application = await db
      .collection('applications')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.json(application);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch application' });
  }
});

router.post('/', async (req, res) => {
  try {
    const db = getDB();
    const { profileId, labId, studentName, labName, statement, matchScore } =
      req.body;

    if (!profileId || !labId || !statement) {
      return res
        .status(400)
        .json({ error: 'profileId, labId, and statement are required' });
    }

    const newApplication = {
      profileId,
      labId,
      studentName: studentName || '',
      labName: labName || '',
      statement,
      matchScore: matchScore || 0,
      status: 'pending',
      createdAt: new Date(),
    };

    const result = await db
      .collection('applications')
      .insertOne(newApplication);
    res.status(201).json({ ...newApplication, _id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create application' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const db = getDB();
    const { statement } = req.body;

    const updateFields = { updatedAt: new Date() };

    if (statement) {
      updateFields.statement = statement;
    }

    const result = await db
      .collection('applications')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updateFields });

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.json({ message: 'Application updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update application' });
  }
});

router.patch('/:id/status', async (req, res) => {
  try {
    const db = getDB();
    const { status } = req.body;

    if (!['pending', 'accepted', 'declined'].includes(status)) {
      return res
        .status(400)
        .json({ error: 'Status must be pending, accepted, or declined' });
    }

    const result = await db
      .collection('applications')
      .updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { status, updatedAt: new Date() } },
      );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.json({ message: `Application ${status} successfully` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update application status' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const db = getDB();
    const result = await db
      .collection('applications')
      .deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.json({ message: 'Application deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete application' });
  }
});

export default router;
