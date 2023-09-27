const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const currentWeek = require('../middleware/currentWeek');
const Day = require("../models/day");

router.get("/days/:id", auth, async (req, res) => {
     try {
          const existingDay = await Day.findOne({ _id: req.params.id });
          if (existingDay === null) {
               res.sendStatus(404);
               return;
          }
          res.send({ existingDay });
     }
     catch (err) {
          console.log(err);
          res.sendStatus(500);
     }
}
);
router.post("/days/:id", auth, currentWeek, async (req, res) => {
     const newDay = new Day({ ...req.body, bindWeek: req.week });
     try {
          await newDay.save();
          res.send(newDay);
     } catch (err) { console.log(err); res.sendStatus(500); }

});

router.patch("/days/:id", auth, async (req, res) => {

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
          res.send({ dayToUPdate });
     } catch (err) { console.log(err); res.sendStatus(400); }
}
);


router.delete("/days/:id", auth, async (req, res) => {
     try {
          const existingDay = await Day.findOneAndDelete({ _id: req.params.id });
          res.sendStatus(200);
     } catch (err) {
          console.log(err);
          res.sendStatus(404);
     }
});


module.exports = router;