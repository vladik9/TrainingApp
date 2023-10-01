const Week = require("../models/week");

const selectedWeek = async (req, res, next) => {
     try {
          const slectedWeek = await Week.findOne({ _id: req.params.id, owner: req.user._id });
          if (slectedWeek === null) throw new Error(`Could not find a week with id ${req.params.id}`);
          req.week = slectedWeek;
          next();
     } catch (err) { console.log(err); }
};

module.exports = selectedWeek;