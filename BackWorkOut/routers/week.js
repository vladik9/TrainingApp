const express = require('express');
const router = express.Router();
const Week = require('../models/week');
const auth = require('../middleware/auth');
const selectedWeek = require('../middleware/selectedWeek');


router.get('/weeks/all', auth, async (req, res) => {
     try {
          const allWeekDays = await Week.find({ owner: req.user._id });
          if (allWeekDays.length === 0) throw new Error("Don't have any weeks yet!");
          Promise.all(allWeekDays.map((week) => week.populate('owner')))
               .then((arrayOfValues) => {
                    res.send(arrayOfValues);
               })
               .catch((error) => {
                    throw new Error("Don't have any weeks yet!" + error);
               });
     } catch (err) { console.log(err); res.sendStatus(404); }
     //simple output all days with attached exercise

});
//this route will get existing week and will populate with specific data for owner
router.get('/weeks/one/:id', auth, selectedWeek, async (req, res) => {
     try {
          req.week.populate('owner').then(updateWeek => { res.send(updateWeek); }).catch((error) => { throw new Error("Don't have any weeks yet!" + error); });


     } catch (err) { console.log(err); res.sendStatus(404); }
}
);

router.post("/week", auth, async function (req, res) {
     const newWeek = new Week(
          { dateStart: req.body.dateStart, dateEnd: req.body.dateEnd, owner: req.user }
     );
     try {
          await newWeek.save();
          res.send(newWeek);

     }
     catch (err) {
          console.log(err);
     }

});

router.patch("/weeks/:id", auth, async (req, res) => {
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

router.delete("/weeks/:id", auth, async (req, res) => {

     try {
          const weekToDelete = await Week.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
          console.log(weekToDelete);
          if (weekToDelete === null) { throw new Error(`Could not find any week to delete`); }
          res.sendStatus(200);
     } catch (err) { console.log(err); res.sendStatus(404); }
});

module.exports = router;

