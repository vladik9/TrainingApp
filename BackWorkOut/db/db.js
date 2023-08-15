// Postman post token update

// if(pm.response.code===201){
//     pm.environment.set("authToken", pm.response.json().token);

// }

const mongoose = require("mongoose");
//cluster connectionData
//userName: adminTraining
//password: adminTrainingPass1

const { USERNAME, PASSWORD } = require("../config");

//local connection
try {
  mongoose.connect("mongodb://127.0.0.1:27017/training-app", {
    useNewUrlParser: true,
  });
  console.log("DB connected successfully!");
} catch (err) {
  console.log("Could not connect");
}

//cloud connection
//mongo atlas conectuion
// const url = `mongodb+srv://adminTraining:${PASSWORD}@trainingcluster.gffwrwx.mongodb.net/?retryWrites=true&w=majority`;
// try {
//   mongoose
//     .connect(url, {
//       useNewUrlParser: true,
//     })
//     .then(() => {
//       console.log("DB connected successfully!");
//     });
// } catch (err) {
//   console.log("Could not connect");
// }
