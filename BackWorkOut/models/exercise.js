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
  weekAtribution: {
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
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

//this is on an instance of a Model like user(instance)
exerciseSchema.methods.generateAuthToken = async function () {

};



//we can have pre and post events occurs
// Hash the plain text password before saving
exerciseSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

// Delete user tasks when user is removed
exerciseSchema.pre("remove", async function (next) {
  const user = this;
  //   await Task.deleteMany({ owner: user._id });
  next();
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
