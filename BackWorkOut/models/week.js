const mongoose = require("mongoose");
const User = require("./user");
//for date need to add validation just for current year or even close to month user is in
const weekSchema = new mongoose.Schema({
  dateStart: {
    type: Date, required: true,
    min: '2023-01-01',
    max: '2024-12-31'
  },
  dateEnd: {
    type: Date, required: true,
    min: '2023-01-01',
    max: '2024-12-31'
  },
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
  foreignField: "bindedWeek",
});



//this will act as a toString when an exercise instance is created
weekSchema.methods.toJSON = function () {
  const week = this;
  const weekObject = week.toObject();

  delete weekObject.owner.tokens;
  delete weekObject.owner.password;
  return weekObject;
};

const Week = mongoose.model("Week", weekSchema);

module.exports = Week;
