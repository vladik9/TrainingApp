const Day = require("../models/day");

const selectedDay = async (req, res, next) => {

     try {
          const selectedDay = await Day.findOne({ _id: req.params.id });
          if (selectedDay === null) throw new Error(`Could not find a week with id ${req.params.id}`);
          req.day = selectedDay;
          next();
     } catch (err) { console.log(err); }

};

module.exports = selectedDay;