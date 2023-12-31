const mongoose = require("mongoose");
// const Task = require("./task");

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  bodyPart: { type: String, required: true, },
  image: { type: String, required: true },
  target: { type: String, required: true, },
  equipment: { type: String, required: true, },
  repetitions: { type: String, required: true },
  weightHistory: { type: Array, required: true },
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
  delete exerciseObject.bindedDay;
  return exerciseObject;
};

// Delete user tasks when user is removed
exerciseSchema.pre("remove", async function (next) {
  const user = this;
  //   await Task.deleteMany({ owner: user._id });
  next();
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
