var mongoose = require('mongoose');

var ScheduleSchema = new mongoose.Schema({
    originating_logic: String,
    start_time: Date,
    end_time: Date,
    dest: String,
    state: mongoose.Schema.Types.Mixed
});


ScheduleSchema.methods.generateOccurances = async function () {

}


mongoose.model("Schedule", ScheduleSchema);