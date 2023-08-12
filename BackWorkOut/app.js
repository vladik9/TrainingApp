const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}/`);
});
