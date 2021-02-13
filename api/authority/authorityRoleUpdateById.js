let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityroleupdatebyid"]), async (req, res) => {
    let $result = req.$result(false, "授权码重复,更新失败!");
    let code = await link.AuthorityRoleFindByCodeNotYourself(req.body.params.code, req.body.params._id);
    if (code.length == 0) {
        $result.flag = true;
        $result.msg = "角色更新成功!";

        // 依据资源信息查询组员列表
        const findresourcesByids = await link.ResourceFindByIds(req.body.params.resources);
        const findresIds = findresourcesByids.map(val => val._id.toString());

        // 去除以及删除的资源
        const params = {
            ...req.body.params,
            resources: findresIds
        };

        $result.data = await link.AuthorityRoleUpdateById(req.body.id, params);
    }
    res.json($result)
}]