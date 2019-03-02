var config = require("../config")
var mongoose = require('mongoose');

require('../models/Schedule')

mongoose.connect(config.mongoURI, { useNewUrlParser: true }).then(
    () => { console.log("connected to mongo"); },
    err => { console.log("could not connect to db") }
);

