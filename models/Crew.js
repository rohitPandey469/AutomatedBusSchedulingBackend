const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({
  crew_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  status: { type: String, enum: ['available', 'on-duty', 'resting'] },
  bus_id: { type: String },
  rest_period: {
    start: { type: Date },
    end: { type: Date }
  }
});

module.exports = mongoose.model('Crew', crewSchema);
