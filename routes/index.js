const express = require("express");
const router = express.Router();

/* Get Home Page */
router.get("/home", (req, res, next) => {
  res.send("Homepage");
});

module.exports = router;
