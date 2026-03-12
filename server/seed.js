import { readFileSync } from 'fs';
import { connectDB, getDB } from './db/connection.js';

async function seed() {
  await connectDB();
  const db = getDB();

  const labsData = JSON.parse(readFileSync('./data/labs.json', 'utf-8'));
  const labsCount = await db.collection('labs').countDocuments();
  if (labsCount === 0) {
    await db.collection('labs').insertMany(labsData);
    console.log(`Seeded ${labsData.length} labs`);
  } else {
    console.log(`Labs already has ${labsCount} records — skipping`);
  }

  console.log('Seeding complete');
  process.exit(0);
}

seed();
