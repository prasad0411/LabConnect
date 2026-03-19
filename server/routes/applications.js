import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getDB } from '../db/connection.js';
import { isAuthenticated } from '../auth/middleware.js';

const router = Router();

router.get('/', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();
    const filter = {};

    if (req.query.labId) {
      filter.labId = req.query.labId;
    }

    if (req.query.mine === 'true') {
      filter.userId = req.user._id.toString();
    }

    if (req.query.profileId) {
      filter.profileId = req.query.profileId;
    }

    const applications = await db
      .collection('applications')
      .find(filter)
      .toArray();
    res.json(applications);
  } catch (_error) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

router.get('/check/:labId', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();
    const existing = await db.collection('applications').findOne({
      userId: req.user._id.toString(),
      labId: req.params.labId,
    });
    res.json({ applied: Boolean(existing) });
  } catch (_error) {
    res.status(500).json({ error: 'Failed to check application status' });
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
  } catch (_error) {
    res.status(500).json({ error: 'Failed to fetch application' });
  }
});

router.post('/', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();
    const { profileId, labId, studentName, labName, statement, matchScore } =
      req.body;

    if (!labId || !statement) {
      return res
        .status(400)
        .json({ error: 'labId and statement are required' });
    }

    const existing = await db.collection('applications').findOne({
      userId: req.user._id.toString(),
      labId,
    });

    if (existing) {
      return res
        .status(409)
        .json({ error: 'You have already applied to this lab' });
    }

    const newApplication = {
      userId: req.user._id.toString(),
      profileId: profileId || '',
      labId,
      studentName: studentName || req.user.name,
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
  } catch (_error) {
    res.status(500).json({ error: 'Failed to create application' });
  }
});

router.put('/:id', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();
    const { statement } = req.body;

    const existing = await db
      .collection('applications')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!existing) {
      return res.status(404).json({ error: 'Application not found' });
    }

    if (existing.userId !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error: 'You can only edit your own applications' });
    }

    const updateFields = { updatedAt: new Date() };
    if (statement) {
      updateFields.statement = statement;
    }

    await db
      .collection('applications')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updateFields });

    res.json({ message: 'Application updated successfully' });
  } catch (_error) {
    res.status(500).json({ error: 'Failed to update application' });
  }
});

router.patch('/:id/status', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();
    const { status } = req.body;

    if (req.user.role !== 'professor') {
      return res.status(403).json({
        error: 'Only professors can accept or decline applications',
      });
    }

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
  } catch (_error) {
    res.status(500).json({ error: 'Failed to update application status' });
  }
});

router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    const db = getDB();

    const existing = await db
      .collection('applications')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!existing) {
      return res.status(404).json({ error: 'Application not found' });
    }

    if (existing.userId !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error: 'You can only delete your own applications' });
    }

    await db
      .collection('applications')
      .deleteOne({ _id: new ObjectId(req.params.id) });

    res.json({ message: 'Application deleted successfully' });
  } catch (_error) {
    res.status(500).json({ error: 'Failed to delete application' });
  }
});

export default router;
