const axios = require("axios");
const ExercisesList = require("../models/exercises");
// this middleware will check if i have data in local mongodb or get them from API but for now will not be used
const db = require("../db/db");
const localExerciseDb = require("../localExerciseDb.js");

const initDataInDB = async (req, res, next) => {
  const isCollectionInMongodb = await ExercisesList.getCollectionSize();
  console.log(isCollectionInMongodb);
  if (!isCollectionInMongodb) {
    console.log("Missing Mongo data, using API to update DB");
    // this will fetch exercises from API
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises",
      headers: {
        "X-RapidAPI-Key": "8e9fc8d0afmshcc4af32a9be6604p1a8318jsndee4724a6a76",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const allExercises = await axios.request(options);
      Promise.all(allExercises.data.map(async exercise => {
        const newExercise = new ExercisesList(
          {
            name: exercise.name,
            bodyPart: exercise.bodyPart,
            image: exercise.gifUrl,
            target: exercise.target,
            equipment: exercise.equipment,

          },
        );
        await newExercise.save();


      })).then(() => { console.log("Saved!"); next(); });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("Data already in MongoDB");
    next();
  }
};


module.exports = initDataInDB;
