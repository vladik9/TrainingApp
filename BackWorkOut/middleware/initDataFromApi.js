const axios = require("axios");
const ExercisesList = require("../models/exercisesArray");
// this middleware will check if i have data in local mongodb or get them from API but for now will not be used
const db = require("../db/db");
const localExerciseDb = require("../localExerciseDb.js");

const initDataFromApi = async (req, res, next) => {
  const isCollectionInMongodb = await ExercisesList.getCollectionSize();
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
      const response = await axios.request(options);
      //here we inserting docs
      for (const item in response) {
        const newExercise = new ExercisesArray([
          {
            name: response[item].name,
            description: response[item].description,
            image: response[item].image,
          },
        ]);
        await newExercise.save();
      }

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("Data already in MongoDB");
    const response = await ExercisesArray.findOne();
  }

  // const LocalExerciseArray = [];

  // localExerciseDb.map(async exercise => {
  //   try {
  //     const newExercise = new ExercisesList(
  //       {
  //         name: exercise.name,
  //         bodyPart: exercise.bodyPart,
  //         image: exercise.gifUrl,
  //         target: exercise.target,
  //         equipment: exercise.equipment
  //       },
  //     );
  //     LocalExerciseArray.push(newExercise);
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // }
  // );
  // try {
  //   console.log(LocalExerciseArray);
  //   await ExercisesList.insertMany(LocalExerciseArray, { ordered: true });
  // } catch (error) {
  //   console.log(error);
  // }


};


module.exports = initDataFromApi;
