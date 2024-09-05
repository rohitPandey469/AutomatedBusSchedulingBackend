const express = require('express');
const Bus = require('../models/Bus');
const router = express.Router();

// Fetch buses
router.get('/', async (req, res) => {
  const { status } = req.query;
  const filters = {};

  if (status) filters.status = status;

  const buses = await Bus.find(filters);
  res.json(buses);
});

// Fetch a specific bus
router.get('/:bus_id', async (req, res) => {
  const { bus_id } = req.params;
  const bus = await Bus.findOne({ bus_id });
  res.json(bus);
});

// Update bus status
router.post('/:bus_id/status', async (req, res) => {
  const { bus_id } = req.params;
  const { status } = req.body;
  await Bus.findOneAndUpdate({ bus_id }, { status });
  res.json({ message: 'Bus status updated successfully' });
});

module.exports = router;
