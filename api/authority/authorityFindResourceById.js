let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityfindresourcebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.ResourceFindById(req.body.id);
    res.json($result)
}]