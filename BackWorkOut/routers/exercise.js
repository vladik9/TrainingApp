const express = require("express");
const Exercise = require("../models/exercise");
const auth = require("../middleware/auth");
const axios = require("axios");
const { TOKENKEY, HOST } = require("../resources/resources");
const haveInitExerciseData = require("../middleware/initDataFromApi");
const initDataFromApi = require("../middleware/initDataFromApi");
const router = new express.Router();
// ######################
// ####Data base access##
//token key
//get body parts for next request
router.get("/bodyParts", async (req, res) => {
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
router.get("/exerciseByBodyPart/:id", async (req, res) => {
  let response;
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${req.params.id}`,
    headers: {
      "X-RapidAPI-Key": "8e9fc8d0afmshcc4af32a9be6604p1a8318jsndee4724a6a76",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    response = await axios.request(options);
    console.log(response);
    res.send(response.data);
  } catch (error) {
    console.error("Error in getting exercise data", error);
    res.send(500, error);
  }
});



//this endpoint will check if i have exercise data
//need to think about name i use
router.get("/checkInitDataInDb", initDataFromApi, (req, res) => {
  console.log(" in main function");
});

module.exports = router;
