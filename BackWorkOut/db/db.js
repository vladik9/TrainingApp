// Postman post token update

// if(pm.response.code===201){
//     pm.environment.set("authToken", pm.response.json().token);

// }

const mongoose = require("mongoose");
//cluster connectionData
//userName: adminTraining
//password: adminTrainingPass1

const { USERNAME, PASSWORD } = require("../config");
const OPTION = process.argv[2] || process.env.OPTION;


//LOCAL vs CLOUD
switch (OPTION) {
  case "LOCAL":
    //local connection
    try {
      console.log("OK lets connect to local server!");

      mongoose.connect("mongodb://127.0.0.1:27017/training-app", {
        useNewUrlParser: true,
      });
      console.log("DB connected successfully!");
    } catch (err) {
      console.log("Could not connected");
    }
    break;
  case "CLOUD":
    {
      console.log("OK lets connect to cloud server");
      //cloud connection
      //mongo atlas connection
      const url = `mongodb+srv://adminTraining:${PASSWORD}@trainingcluster.8xgwa2r.mongodb.net/?retryWrites=true&w=majority`;
      try {
        mongoose
          .connect(url, {
            useNewUrlParser: true,
          })
          .then(() => {
            console.log("DB connected successfully!");
          });
      } catch (err) {
        console.log("Could not connected!");
      }
      break;
    }
  default: {
    console.error("You need to specify a OPTION(LOCAL vs CLOUD) for database connection!");
    break;
  }
}
