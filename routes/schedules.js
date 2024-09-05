const express = require("express");
const Schedule = require("../models/Schedule");
const authenticateJWT = require("../middleware/authMiddleware")
const router = express.Router();

// Applying auth middleware to all routres
router.use(authenticateJWT)

// Fetch schedules
router.get("/", async (req, res) => {
  const { date, crew_id, bus_id } = req.query;
  const filters = {};

  if (date) {
    filters.start_time = {
      $gte: new Date(date),
      $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
    };
  }
  if (crew_id) filters.crew_id = crew_id;
  if (bus_id) filters.bus_id = bus_id;

  const schedules = await Schedule.find(filters);
  res.json(schedules);
});

// Create a new schedule
router.post("/", async (req, res) => {
  const schedule = new Schedule(req.body);
  await schedule.save();
  res.json({
    message: "Schedule created successfully",
    schedule_id: schedule._id,
  });
});

// Update a schedule
router.put("/:schedule_id", async (req, res) => {
  const { schedule_id } = req.params;
  await Schedule.findByIdAndUpdate(schedule_id, req.body);
  res.json({ message: "Schedule updated successfully" });
});

// Delete a schedule
router.delete("/:schedule_id", async (req, res) => {
  const { schedule_id } = req.params;
  await Schedule.findByIdAndDelete(schedule_id);
  res.json({ message: "Schedule deleted successfully" });
});

module.exports = router;
