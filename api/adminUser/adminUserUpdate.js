let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_adminuserupdate"]), async (req, res) => {
    let $result = req.$result();

    // 依据资源信息查询角色列表
    const findrolesByids = await link.RoleFindByIds(req.body.params.roles);
    const findrolIds = findrolesByids.map(val => val._id.toString());

    // 去除以及删除的资源
    const params = {
        ...req.body.params,
        roles: findrolIds
    };

    $result.data = await link.AdminUserUpdateById(req.body.id, params);
    res.json($result)
}]