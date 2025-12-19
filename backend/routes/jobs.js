const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { location } = req.query;

    let filter = {};
    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    const jobs = await Job.find(filter).sort({ postedDateTime: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
