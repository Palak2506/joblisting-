const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobId: String,
  title: String,
  company: String,
  location: String,
  employment_type: String,
  experience: String,
  source: String,
  job_link: String,
  postedDateTime: Date,
  min_exp: Number,
  max_exp: Number,
  country: String,
  companytype: String,
  companyImageUrl: String
}, { strict: false }); // 👈 IMPORTANT

module.exports = mongoose.model("Job", jobSchema);
