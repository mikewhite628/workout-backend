const express = require("express");
const app = express();
const port = 3001;
const router = express.Router();

app.use("/", router);
app.use(require("cors")()); // allow Cross-domain requests
app.use(require("body-parser").json()); // When someone sends something to the server, we can recieve it in JSON format

require("dotenv").config();

const MongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ahhxn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
async function main() {
  await mongoose.connect(MongoDB);
  console.log("connected");
}

const mongoose = require("mongoose");
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const { Schema } = mongoose;

console.log(db);
main().catch((err) => console.log(err));

const workoutSchema = new mongoose.Schema({
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

const Workout = mongoose.model("workout", workoutSchema);
const day1 = new Workout({
  name: "Squat",
  date: Date.now(),
  sets: [
    { reps: 18, weight: 135 },
    {
      reps: 12,
      weight: 225,
    },
  ],
  notes: "Tough Lift",
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/workouts", async (req, res) => {
  const workouts = await Workout.find({});

  try {
    res.send(workouts);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
