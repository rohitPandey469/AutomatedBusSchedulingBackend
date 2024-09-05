const express = require('express');
const router = express.Router();

// Fetch notifications
router.get('/', async (req, res) => {
  // Example notification data
  const notifications = [
    { type: 'conflict', message: 'Crew C123 is overbooked for the next shift.' },
    { type: 'unassigned', message: 'Bus DTC789 has no crew assigned for 2024-09-10.' }
  ];
  res.json(notifications);
});

// Fetch notifications by date
router.get('/:date', async (req, res) => {
  const { date } = req.params;

  // Example date-based notifications
  const notifications = [
    { type: 'unassigned', message: `Bus DTC789 has no crew assigned for ${date}.` }
  ];

  res.json(notifications);
});

module.exports = router;
