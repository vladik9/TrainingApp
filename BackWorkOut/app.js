const express = require("express");
var cors = require("cors");

const userRouter = require("./routers/user");
const User = require("./models/user");
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
app.use(express.json());
app.use(userRouter);
//for 404
app.get("/*", async (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}/`);
});
