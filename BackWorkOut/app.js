const express = require("express");
const userRouter = require("./routers/user");
const User = require("./models/user");
// require("./db/db.js");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(userRouter);
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}/`);
});
