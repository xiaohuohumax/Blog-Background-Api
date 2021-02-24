let serverOrigin = require('./serverOrigin');

module.exports = function getUrl(path) {
    return new URL(path, serverOrigin.expressOrigin).href;
}