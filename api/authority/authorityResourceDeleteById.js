let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityresourcedeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.AuthorityResourceDeleteById(req.body.id);
    res.json($result)
}]