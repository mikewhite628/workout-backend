const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
require("dotenv").config();

const indexRouter = require("./routes/index");
const workoutRouter = require("./routes/workout");

app.use(require("cors")()); // allow Cross-domain requests
app.use(require("body-parser").json()); // When someone sends something to the server, we can recieve it in JSON format

// connect to DB
const MongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB}`;
async function main() {
  await mongoose.connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected");
}

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const { Schema } = mongoose;

main().catch((err) => console.log(err));

app.use("/api", indexRouter);
app.use("/api", workoutRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
