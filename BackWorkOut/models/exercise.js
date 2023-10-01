const mongoose = require("mongoose");
// const Task = require("./task");

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  bodyPart: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  target: { type: String, required: true, lowercase: true },
  equipment: { type: String, required: true, lowercase: true },
  repetitions: { type: String, required: true },
  weightHistory: { type: String, required: true },
  bindedDay: {
    ref: "Week",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
}


);

// userSchema.virtual("tasks", {
//   ref: "Task",
//   localField: "_id",
//   foreignField: "owner",
// });
//this will act as a toString when an exercise instance is created
exerciseSchema.methods.toJSON = function () {
  const exercise = this;
  const exerciseObject = exercise.toObject();
  delete exerciseObject.password;
  delete exerciseObject.tokens;

  return exerciseObject;
};

//this is on an instance of a Model like user(instance)
exerciseSchema.methods.generateAuthToken = async function () {

};

// Delete user tasks when user is removed
exerciseSchema.pre("remove", async function (next) {
  const user = this;
  //   await Task.deleteMany({ owner: user._id });
  next();
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
