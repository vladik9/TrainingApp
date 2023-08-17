const express = require("express");
const Eexercise = require("../models/exercise");
const auth = require("../middleware/auth");
const router = new express.Router();

//when user wants to gett all exercuses

router.post("/saveNewExercise", ath, async (req, res) => {
  //cretating a new exercise record
  const exercise = new Exercise({ ...req.body, owner: req.user._id });
  try {
    await exercise.save();
  } catch (error) {
    console.log("Error in saving an exercise" + error);
  }
});

module.exports = router;
