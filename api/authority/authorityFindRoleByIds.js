let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityfindrolebyids"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.authorityFindRoleByIds(req.body.ids);
    res.json($result)
}]