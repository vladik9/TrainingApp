const mongoose = require("mongoose");
// const Task = require("./task");

const daySchema = new mongoose.Schema({
  dayName: { type: String, required: true, lowercase: true },
  bodyPart: { type: String, required: true, lowercase: true },
  bindedWeek: {
    ref: 'Week',
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
}
);

daySchema.virtual("exercise", {
  ref: "Exercise",
  localField: "_id",
  foreignField: "bindedDay",
});



// userSchema.virtual("tasks", {
//   ref: "Task",
//   localField: "_id",
//   foreignField: "owner",
// });
//this will act as a toString when an exercise instance is created
daySchema.methods.toJSON = function () {
  const day = this;
  const dayObject = day.toObject();
  return dayObject;
};

const Day = mongoose.model("day", daySchema);

module.exports = Day;