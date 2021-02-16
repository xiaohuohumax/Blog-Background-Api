let link = require('../../mongoose/link');

let websocketCode = require('../../model/websocket/websocketCode');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webuserupdatebyid"]), async (req, res) => {
    let $result = req.$result();
    try {
        await link.WebUserUpdateById(req.body.id, req.body.params);
    } catch (error) {}
    // 提示信息更新
    req.$websocketModel.sendJsonToAllUser(websocketCode.FLUSH_YOURSELF, {
        msg: ""
    })
    res.json($result);
}]