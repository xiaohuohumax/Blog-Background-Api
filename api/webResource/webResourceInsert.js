let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webresourceinsert"]),async (req, res) => {

    let $result = req.$result(false, "授权码重复!");
    if (!req.body.params) {
        throw new Error("参数错误");
    }
    let code = await link.WebResourceFindByCode(req.body.params.code);
    if (code.length == 0) {
        $result.flag = true;
        $result.msg = "资源创建成功!";
        $result.data = await link.WebResourceInsert(req.body.params);
    }

    res.json($result)
}]