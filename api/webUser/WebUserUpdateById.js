let link = require('../../mongoose/link');

let websocketCode = require('../../model/websocket/websocketCode');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webuserupdatebyid"]), async (req, res) => {
    let $result = req.$result();
    await link.WebUserUpdateById(req.body.id, req.body.params);
    // 提示信息更新
    req.$websocketModel.sendJsonToAllUser(websocketCode.FLUSH_YOURSELF, {})
    res.json($result);
}]