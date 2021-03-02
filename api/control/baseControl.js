const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_basecontrol"]), async (req, res) => {
    let $result = req.$result(true, "发送成功!");
    // 刷新网站设置
    $result.data = req.$websocketModel.sendJsonToAllUser(req.body.code, req.body.params)
    res.json($result)
}]