const express = require("express");
const Exercises = require("../models/exercise");
const ExercisesList = require("../models/exercises");
const auth = require("../middleware/auth");
const initDataInDB = require("../middleware/initDataInDB");
const selectedDay = require("../middleware/selectedDay");
const router = new express.Router();
//token key
//get body parts for next request
router.get("/bodyParts", initDataInDB, async (req, res) => {
  const bodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];
  res.send(bodyParts);
});
//this will give you a list of exercises by bodyparts
//this endpoint should get paggination
router.get("/exercise/:id", async (req, res) => {

  try {
    const exercise = await ExercisesList.find({ "bodyPart": req.params.id });
    if (exercise.length === 0) throw new Error("No exercise found");
    res.send(exercise);
  } catch (err) {
    res.sendStatus(404);
    console.log(err);
  }
});

//save an updated exerise from user
router.post("/exercise/:id", auth, selectedDay, async (req, res) => {
  try {
    const exercise = new Exercises({ ...req.body, "bindedDay": req.day._id });
    await exercise.save();
    res.send(exercise);
  }
  catch (err) { console.log(err); }
});

//get one exercise from  user saved
router.get("/exerciseById/:id", auth, async (req, res) => {
  try {
    const exercise = await Exercises.findOne({ _id: req.params.id });
    res.send(exercise);
  } catch (err) {
    res.sendStatus(404);
    console.log(err);
  }
});
//this is not working need to be fixed
router.get('/getDayExercises/:id', auth, selectedDay, async (req, res) => {
  console.log(req.query.limit);
  try {

    // const exercises = await Exercises.findOne({ bindedDay: req.params.id });
    const exercises = await Exercises.find({ bindedDay: req.params.id },
    ).populate({
      path: "name",
      options: { perDocumentLimit: 1, limit: 1 },
      limit: 1,
    }).exec();




    res.send(exercises);
  } catch (err) {
    res.sendStatus(404);
  }

});
module.exports = router;
