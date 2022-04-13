const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new mongoose.Schema({
  name: "string",
  date: "string",
  sets: [
    {
      repNumber: Number,
      repWeight: Number,
    },
  ],
  notes: "string",
});

module.exports = mongoose.model("Workout", WorkoutSchema);
