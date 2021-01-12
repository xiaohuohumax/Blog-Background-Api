let config = require('../config');
let ip = require('./ip');
var url = require("url");

module.exports = function getUrl(path) {
    let listening = config.listening;
    return url.resolve(`http://${ip}${listening!="80"?`:${listening}`:""}`, path);
}