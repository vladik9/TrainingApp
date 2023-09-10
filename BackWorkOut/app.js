const express = require("express");
var cors = require("cors");
const userRouter = require("./routers/user");
const exerciseRouter = require("./routers/exercise");
const dayRouter = require("./routers/day");
const weekRouter = require("./routers/week");
const User = require("./models/user");
const Exercise = require("./models/exercise");
const Day = require("./models/day");
const Week = require("./models/week");

require("./db/db.js");

const PORT = process.env.PORT || 8080;

const app = express();
//allowing corse and setting what source is available to connect
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
//used to parse incoming requests as JSON objects
app.use(express.json());

//using router in main file
app.use(exerciseRouter);
app.use(userRouter);
app.use(weekRouter);
app.use(dayRouter);


//for 404
app.get("/*", async (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}/`);
});
