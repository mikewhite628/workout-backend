const express = require("express");
const router = express.Router();

const workout_controller = require("../controllers/workoutController");

//workout routes
router.get("/workouts", workout_controller.workout_list);

router.post("/workouts", workout_controller.workout_create);

router.put("/workouts", workout_controller.workout_update);
router.delete("/workouts", workout_controller.workout_delete);

module.exports = router;
