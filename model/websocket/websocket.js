let ws = require("nodejs-websocket");

let serverOrigin = require('../../tools/serverOrigin');

const config = require('../../config.js');

class WebsocketModel {
    constructor() {
        this.websocketServer = ws.createServer(function (conn) {
            conn.on("text", function (str) {
                console.log("message:" + str)
            })
            conn.on("close", function (code, reason) {
                console.log("websocket close", code);
            });
            conn.on("error", function (code, reason) {
                console.log("websocket error close", code);
            });
        }).listen(config.websocket.port);
    }
    // 发送json 文件
    _sendJson(json) {
        let sum = 0;
        this.websocketServer.connections.forEach(conn => {
            conn.sendText(JSON.stringify(json));
            sum++;
        });
        return sum;
    }
    // 原生connections
    connections() {
        return this.websocketServer.connections;
    }
    // 发送信息
    sendJsonToAllUser(code, json) {
        return this._sendJson({
            code, // 详见 websocketCode
            data: json
        })
    }
}
const websocketModel = new WebsocketModel();
console.log(`websocket listening at ${serverOrigin.websocketOrigin}`);
module.exports = (req, res, next) => {
    req.$websocketModel = websocketModel;
    next();
};