const mongoose = require("mongoose");
const validator = require("validator");
// const Task = require("./task");
//here i need to create and Schema for incoming elements
const allExercises = new mongoose.Schema({
  name: { type: String, required: true },
  bodyPart: { type: String, required: true },
  image: { type: String, required: true },
  target: { type: String, required: true, },
  equipment: { type: String, required: true }

});

allExercises.statics.getCollectionSize = async () => {
  return await ExercisesList.countDocuments();
};

const ExercisesList = mongoose.model(
  "allExercises",
  allExercises
);

module.exports = ExercisesList;

