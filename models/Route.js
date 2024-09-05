const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  route_id: { type: String, required: true, unique: true },
  source: { type: String },
  destination: { type: String },
  total_distance: { type: String }
});

module.exports = mongoose.model('Route', routeSchema);
