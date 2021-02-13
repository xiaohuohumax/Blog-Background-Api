let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_adminuserinsert"]),async (req, res) => {
    let $result = req.$result();
    if (!req.body.params) {
        throw new Error("参数错误!");
    }
    // 检查用户是否存在
    let isExisit = await link.AdminUserFindByName(req.body.params.name);
    if (isExisit) {
        $result.msg = "此用户已被注册";
        $result.flag = false;
    } else {
        await link.AdminUserAdd(req.body.params);
        $result.msg = "注册成功";
        $result.flag = true;
    }
    res.json($result)
}]