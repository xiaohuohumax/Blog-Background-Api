let link = require('../../mongoose/link');

let websocketCode = require('../../model/websocket/websocketCode');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_informsendmessage"]), async (req, res) => {

    let $result = req.$result(true, "发送成功!");
    // 刷新网站设置
    req.$websocketModel.sendJsonToAllUser(websocketCode.INFORM_MESSAGE, req.body.params)
    res.json($result)
}]