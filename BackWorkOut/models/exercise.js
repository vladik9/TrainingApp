const mongoose = require("mongoose");
const validator = require("validator");
const User = requre("../models/user");
//creating exercise schema
const exerciseSchema = new mongoose.Schema({
  exerciseName: {
    type: String,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isAlpha(value)) {
        throw new Error("Name cannot contain numbers or symbols");
      }
    },
  },
  link: {
    type: String,
    required: true,
  },
  weightHistory: {
    type: Array,
    required: true,
    validate(value) {
      if (!validator.isNumeric(value)) {
        throw new Error("This should be a number");
      }
    },
    owner: {
      //this is way of geting object id from module schema
      // to define a field that will hold MongoDB's ObjectId values
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      //reference this to User schema object model
      ref: User,
    },
  },
});

// userSchema.virtual("tasks", {
//   ref: "Task",
//   localField: "_id",
//   foreignField: "owner",
// });

//this will act as a toString when an user instance is created
exerciseSchema.methods.toJSON = function () {
  const exercise = this;
  //this gives us and object from insatan if object
  const exerciseObject = exercise.toObject();
  //some filds to remove
  // delete exerciseObject.password;
  // delete exerciseObject.tokens;

  return exerciseObject;
};

//creating a model  absed on name and schema provided
const Exercise = mongoose.model("Exercise", exerciseSchema);

//exporting model for future import
module.exports = Exercise;
