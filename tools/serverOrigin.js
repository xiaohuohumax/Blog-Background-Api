let config = require('../config');

// 获取url 的 origin
module.exports = {
    // express origin
    expressOrigin: new URL("", `http://${config.server.host}:${config.server.port}`).origin,
    // websocket origin
    websocketOrigin: new URL("", `ws://${config.server.host}:${config.websocket.port}`).origin,
};