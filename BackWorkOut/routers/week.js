const express = require('express');
const router = express.Router();
const Week = require('../models/week');
const auth = require('../middleware/auth');
const Day = require('../models/day');


router.get('/allWeeks', auth, async (req, res) => {
     try {
          const allWeekDays = await Week.find({ owner: req.user._id });
          if (allWeekDays.length === 0) throw new Error("Don't have any weeks yet!");
          res.send({ allWeekDays });
     } catch (err) { console.log(err); res.sendStatus(404); }
     //simple output  all days with attached exercise

});

router.post("/createAWeek", auth, async function (req, res) {
     const newWeek = new Week(
          { dateStart: req.body.dateStart, dateEnd: req.body.dateEnd, owner: req.user }
     );
     try {
          await newWeek.save();
          res.send({ newWeek });

     }
     catch (err) {
          console.log(err);
     }

});



router.get('/oneWeek/:id', auth, async (req, res) => {
     try {
          const currentWeekDay = await Week.findOne({ _id: req.params.id, owner: req.user._id });
          if (currentWeekDay === null) throw new Error("Can't find specified weekDay!");
          res.send({ currentWeekDay });
     } catch (err) { console.log(err); res.sendStatus(404); }
}
);
router.patch("/updateAWeek/:id", auth, async (req, res) => {
     const allowedOptions = ["dateStart", "dateEnd"];
     const updates = Object.keys(req.body);
     const isValidOperation = updates.every((update) => allowedOptions.includes(update));
     if (!isValidOperation) {
          return res.status(400).send({ error: 'Invalid updates!' });
     }
     try {
          const weekToUPdate = await Week.findOne({ _id: req.params.id, owner: req.user._id });
          if (weekToUPdate === null) throw new Error("Don't have any weeks yet!");
          updates.forEach((update) => weekToUPdate[update] = req.body[update]);
          await weekToUPdate.save();
          res.send(weekToUPdate);
     } catch (err) { console.log(err); res.sendStatus(400); }
});

router.delete("/deleteAWeek/:id", auth, async (req, res) => {

     try {
          const weekToDelete = await Week.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
          console.log(weekToDelete);
          if (weekToDelete === null) { throw new Error(`Could not find any week to delete`); }
          res.sendStatus(200);
     } catch (err) { console.log(err); res.sendStatus(404); }
});


router.get("/oneWeekAllData/:id", auth, async (req, res) => {

     try {
          const allWeekData = await Day.find({ bindWeek: req.params.id });
          console.log("🚀 ~ file: week.js:74 ~ router.get ~ allWeekData:", allWeekData);



     }
     catch (err) { console.log(err); res.sendStatus(404); }

});
module.exports = router;

