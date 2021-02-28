let ws = require("nodejs-websocket");

let serverOrigin = require('../../tools/serverOrigin');

const config = require('../../config.js');

class WebsocketModel {
    constructor() {
        this.websocketServer = ws.createServer(function (conn) {
            conn.on("text", function (str) {
                console.log("message:" + str)
                conn.sendText("My name is Web Xiu!");
            })
            conn.on("close", function (code, reason) {
                console.log("websocket close", code, reason);
            });
            conn.on("error", function (code, reason) {
                console.log("websocket error close", code, reason);
            });
        }).listen(config.websocket.port);
    }
    // 发送json 文件
    _sendJson(json) {
        this.websocketServer.connections.forEach(conn => {
            conn.sendText(JSON.stringify(json));
        });
    }
    // 原生connections
    connections() {
        return this.websocketServer.connections;
    }
    // 发送信息
    sendJsonToAllUser(code, json) {
        this._sendJson({
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