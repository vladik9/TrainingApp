const express = require('express');
const router = express.Router();
const Week = require('../models/week');
const auth = require('../middleware/auth');

router.post("/createAWeek", auth, async function (req, res) {
     const newWeek = new Week(
          { dateStart: "23525", dateEnd: "klansflkna", owner: req.user }
     );
     try {
          await newWeek.save();
     }
     catch (err) {
          console.log(err);
     }
     res.send({ newWeek });

});

module.exports = router;