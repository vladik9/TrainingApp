const express = require("express");
const Exercise = require("../models/exercise");
const ExercisesList = require("../models/exercises");
const auth = require("../middleware/auth");
const axios = require("axios");
const { TOKENKEY, HOST } = require("../resources/resources");
const haveInitExerciseData = require("../middleware/initDataInDB");
const initDataInDB = require("../middleware/initDataInDB");

const router = new express.Router();
// ######################
// ####Data base access##
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
//this endpoint should get paggination
router.get("/exercise/:id", async (req, res) => {
  try {
    const exercise = await ExercisesList.find({ "bodyPart": req.params.id });
    res.send(exercise);
  } catch (err) { throw new Error(err); }



  // let response;
  // const options = {
  //   method: "GET",
  //   url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${req.params.id}`,
  //   headers: {
  //     "X-RapidAPI-Key": "8e9fc8d0afmshcc4af32a9be6604p1a8318jsndee4724a6a76",
  //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  //   },
  // };

  // try {
  //   response = await axios.request(options);
  //   console.log(response);
  //   res.send(response.data);
  // } catch (error) {
  //   console.error("Error in getting exercise data", error);
  //   res.send(500, error);
  // }
});

//here i can check if i have exercise in my data base and bring them if not from api
router.get("/checkInitDataInDb", initDataInDB, (req, res) => {
  console.log(" in main function");
});

module.exports = router;
