const mongoose = require("mongoose");

const weekSchema = new mongoose.Schema({
  dateStart: { type: String, required: true },
  dateEnd: { type: String, required: true },
  owner: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }
}
);

weekSchema.virtual("day", {
  ref: "Day",
  localField: "_id",
  foreignField: "dayOfTheweek",
});

// userSchema.virtual("tasks", {
//   ref: "Task",
//   localField: "_id",
//   foreignField: "owner",
// });

//this will act as a toString when an exercise instance is created
weekSchema.methods.toJSON = function () {
  const week = this;

  // return userObject;
};

const Week = mongoose.model("Week", weekSchema);

module.exports = Week;
