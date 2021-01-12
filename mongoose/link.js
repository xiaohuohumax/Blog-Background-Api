let mongoose = require('mongoose');

let linkModel = require('./linkModel');

const {
    database
} = require('../config');

let url = `mongodb://${database.user}:${database.password}@${database.host}/${database.database}`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log("databse link open!"))

module.exports = linkModel;