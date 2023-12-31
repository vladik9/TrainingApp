const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const selectedWeek = require('../middleware/selectedWeek');
const Day = require("../models/day");

router.get("/days/:id", auth, async (req, res) => {
     try {
          const selectedDay = await Day.findOne({ _id: req.params.id });
          if (selectedDay === null) {
               res.sendStatus(404);
               return;
          }
          selectedDay.populate('bindedWeek').then((response) =>
               res.send(response)).catch(() => { throw new Error("Don't have any weeks yet!"); });
     }
     catch (err) {
          console.log(err);
          res.sendStatus(500);
     }
}
);
router.post("/days/:id", auth, selectedWeek, async (req, res) => {
     const newDay = new Day({ ...req.body, bindedWeek: req.week });
     try {
          await newDay.save();
          res.send(newDay);
     } catch (err) { console.log(err); res.sendStatus(500); }

});

router.patch("/day/:id", auth, async (req, res) => {

     const allowedOptions = ["dayName", "bodyPart", "image", "target", "equipment", "repetitions", "weightHistory"];
     const updates = Object.keys(req.body);
     const isValidOperation = updates.every((update) => allowedOptions.includes(update));
     if (!isValidOperation) {
          return res.status(400).send({ error: 'Invalid updates!' });
     }
     try {
          const dayToUPdate = await Day.findOne({ _id: req.params.id });
          if (dayToUPdate === null) throw new Error("Don't have any days yet!");
          updates.forEach((update) => dayToUPdate[update] = req.body[update]);
          await dayToUPdate.save();
          res.send(dayToUPdate);
     } catch (err) { console.log(err); res.sendStatus(400); }
}
);


router.delete("/days/:id", auth, async (req, res) => {
     try {
          const selectedDay = await Day.findOneAndDelete({ _id: req.params.id });
          res.sendStatus(200);
     } catch (err) {
          console.log(err);
          res.sendStatus(404);
     }
});


module.exports = router;