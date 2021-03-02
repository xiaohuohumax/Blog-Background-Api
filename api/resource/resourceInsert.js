let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_resourceinsert"]),async (req, res) => {

    let $result = req.$result(false, "授权码重复!");
    if (!req.body.params) {
        throw new Error("参数错误");
    }
    let code = await link.ResourceFindByCode(req.body.params.code);
    if (code.length == 0) {
        $result.flag = true;
        $result.msg = "资源创建成功!";
        $result.data = await link.ResourceInsert(req.body.params);
    }

    res.json($result)
}]