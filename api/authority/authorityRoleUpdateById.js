let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource([""]),async (req, res) => {
    let $result = req.$result(false, "授权码重复,更新失败!");
    let code = await link.AuthorityRoleFindByCodeNotYourself(req.body.params.code, req.body.params._id);
    if (code.length == 0) {
        $result.flag = true;
        $result.msg = "角色更新成功!";
        $result.data = await link.AuthorityRoleUpdateById(req.body.id, req.body.params);
    }
    res.json($result)
}]