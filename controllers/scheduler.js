const mongoose = require('mongoose')
const moment = require('moment');
const Schedule = mongoose.model('Schedule');



exports.add_schedule = async function (req, res, next) {
    const schedule_json = Object.assign({}, req.body);
    schedule_json.start_time = moment(schedule_json.start_time, "DD-MM-YYYY HH:mm:ss");
    schedule_json.end_time = moment(schedule_json.end_time, "DD-MM-YYYY HH:mm:ss");

    const schedule = new Schedule(schedule_json);

    await schedule.save();
    await schedule.generateOccurances();
};