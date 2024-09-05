const express = require("express");
const Crew = require("../models/Crew");
const router = express.Router();

// Fetch crew
router.get("/", async (req, res) => {
  const { available } = req.query;
  const filters = {};

  if (available) filters.status = available;

  const crew = await Crew.find(filters);
  res.json(crew);
});

// Fetch a specific crew member
router.get("/:crew_id", async (req, res) => {
  const { crew_id } = req.params;
  const crew = await Crew.findOne({ crew_id });
  res.json(crew);
});

// Update crew details
router.put("/:crew_id", async (req, res) => {
  const { crew_id } = req.params;
  await Crew.findOneAndUpdate({ crew_id }, req.body);
  res.json({ message: "Crew details updated successfully" });
});

module.exports = router;
