const Workout = require("../models/workout");
const bodyParser = require("body-parser");

exports.workout_list = async (req, res, next) => {
  const workouts = await Workout.find();

  try {
    res.send(workouts);
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.add_workout = (req, res, next) => {};
