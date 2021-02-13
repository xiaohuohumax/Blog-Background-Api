let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityroledeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.AuthorityRoleDeleteById(req.body.id);
    res.json($result)
}]