const Workout = require("../models/workout");
const bodyParser = require("body-parser");
const async = require("async");

exports.workout_list = async (req, res, next) => {
  const workouts = await Workout.find();

  try {
    res.send(workouts);
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.workout_create = (req, res, next) => {
  const workout = new Workout({
    name: req.body.lift,
    date: req.body.dates,
    sets: req.body.sets,
    notes: req.body.notes,
  });

  console.log(workout);
  workout.save();
  res.redirect("/workouts");
};

exports.workout_delete = (req, res, next) => {
  console.log(req.body.id);
  async.parallel(
    {
      workout: function (callback) {
        Workout.findById(req.body.id).exec(callback);
      },
    },
    function (err, results) {
      Workout.findByIdAndRemove(req.body.id, function deleteItem(err) {
        if (err) {
          return next(err);
        }
      });
    }
  );
};

exports.workout_update = (req, res, next) => {
  console.log(req.body.id);
  //   async.parallel(
  //     {
  //       workout: function (callback) {
  //         Workout.findById(req.body.id).exec(callback);
  //       },
  //     },
  //     function (err, results) {
  //       Workout.findByIdAndUpdate(
  //         req.body.id,
  //         {
  //           lift: req.body.lift,
  //           date: req.body.date,
  //           notes: req.body.notes,
  //           sets: req.body.sets,
  //         },
  //         function updateItem(err) {
  //           if (err) {
  //             return next(err);
  //           }
  //         }
  //       );
  //     }
  //   );
};
