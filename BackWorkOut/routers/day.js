const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const currentWeek = require('../middleware/currentWeek');
const Day = require("../models/day");
router.get("/day", auth, (req, res) => {
     console.log("Here i can give a day plan of exercises for current day");
});
router.post("/day/:id", auth, currentWeek, async (req, res) => {
     const newDay = new Day({ ...req.body, weekOwner: req.week });
     try {
          await newDay.save();
          res.send(newDay);
     } catch (err) { console.log(err); res.sendStatus(500); }





});



module.exports = router;