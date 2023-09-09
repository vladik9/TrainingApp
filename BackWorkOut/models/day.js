const mongoose = require("mongoose");
// const Task = require("./task");

const daySchema = new mongoose.Schema({
  dayName: { type: String, required: true, lowercase: true },
  bodyPart: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  target: { type: String, required: true, lowercase: true },
  equipment: { type: String, required: true, lowercase: true },
  repetitions: { type: String, required: true },
  weightHistory: { type: String, required: true },
  dayOfTheweek: {
    ref: 'Week',
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }
}


);

daySchema.virtual("exercise", {
  ref: "Exercise",
  localField: "_id",
  foreignField: "weekAtribution",
});



// userSchema.virtual("tasks", {
//   ref: "Task",
//   localField: "_id",
//   foreignField: "owner",
// });
//this will act as a toString when an exercise instance is created
daySchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};






const Day = mongoose.model("day", daySchema);

module.exports = Day;
