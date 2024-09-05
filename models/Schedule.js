const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  bus_id: { type: String, required: true },
  crew_id: { type: String, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  route: { type: String, required: true }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
