let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityfindrolebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.AuthorityFindRoleById(req.body.id);
    res.json($result)
}]