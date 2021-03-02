let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webroledeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.WebRoleDeleteById(req.body.id);
    res.json($result)
}]