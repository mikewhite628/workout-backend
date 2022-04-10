const express = require("express");
const router = express.Router();

const workout_controller = require("../controllers/workoutController");

//workout routes
router.get("/workouts", workout_controller.workout_list);

module.exports = router;
