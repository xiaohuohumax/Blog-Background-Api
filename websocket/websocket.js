let ws = require("nodejs-websocket");

let ip = require('../tools/ip');

const config = require('../config.js');

class WebsocketModel {
    constructor() {
        this.websocketServer = ws.createServer(function (conn) {
            conn.on("text", function (str) {
                console.log("message:" + str)
                conn.sendText("My name is Web Xiu!");
            })
            conn.on("close", function (code, reason) {
                console.log("websocket close");
            });
            conn.on("error", function (code, reason) {
                console.log("websocket error close");
            });
        }).listen(config.websocketListening);
    }
    // 发送json 文件
    _sendJson(json) {
        this.websocketServer.connections.forEach(conn => {
            conn.sendText(JSON.stringify(json));
        });
    }
    // 发送信息
    sendJsonToAllUser(code, json) {
        this._sendJson({
            code, // 详见 websocketCode
            data: json
        })
    }
}
console.log(`websocket listening at http://${ip}:${config.websocketListening}`);

module.exports = new WebsocketModel();