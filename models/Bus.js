const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  bus_id: { type: String, required: true, unique: true },
  route: { type: String },
  status: {
    type: String,
    enum: ["available", "in-service", "under-maintenance"],
  },
  crew_id: { type: String },
});

module.exports = mongoose.model("Bus", busSchema);
