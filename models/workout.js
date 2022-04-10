const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new mongoose.Schema({
  name: "string",
  date: Number,
  sets: [
    {
      reps: Number,
      weight: Number,
    },
  ],
  notes: "string",
});

module.exports = mongoose.model("Workout", WorkoutSchema);
