let serverOrigin = require('./serverOrigin');

// 拼接网址
module.exports = function getUrl(path) {
    return new URL(path, serverOrigin.expressOrigin).href;
}