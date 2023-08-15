const mongoose = require("mongoose");
const validator = require("validator");
// const Task = require("./task");

const exerciseSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isAlpha(value)) {
        throw new Error("First Name is invalid");
      }
    },
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isAlpha(value)) {
        throw new Error("Last Name is invalid");
      }
    },
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.length <= 8)
        throw new Error("Password should be 8 or more characters.");
      if (value.toLowerCase().includes("password"))
        throw new Error('Password cannot contain "password"');
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: false,
      },
    },
  ],
});

// userSchema.virtual("tasks", {
//   ref: "Task",
//   localField: "_id",
//   foreignField: "owner",
// });
//this will act as a toString when an user instance is created
exerciseSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

//this is on an instance of a Model like user(instance)
exerciseSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismynewcourse");

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};
//this is on a Model like User(not instance)
exerciseSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

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
