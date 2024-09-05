const express = require('express');
const Route = require('../models/Route');
const router = express.Router();

// Fetch routes
router.get('/', async (req, res) => {
  const routes = await Route.find();
  res.json(routes);
});

// Create a new route
router.post('/', async (req, res) => {
  const route = new Route(req.body);
  await route.save();
  res.json({ message: 'Route created successfully' });
});

// Update a route
router.put('/:route_id', async (req, res) => {
  const { route_id } = req.params;
  await Route.findOneAndUpdate({ route_id }, req.body);
  res.json({ message: 'Route updated successfully' });
});

module.exports = router;
