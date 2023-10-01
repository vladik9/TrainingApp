const Day = require("../models/day");

const existingDay = async (req, res, next) => {

     try {
          const existingDay = await Day.findOne({ _id: req.params.id });
          if (existingDay === null) throw new Error(`Could not find a week with id ${req.params.id}`);
          req.day = existingDay;
          next();
     } catch (err) { console.log(err); }

};

module.exports = existingDay;