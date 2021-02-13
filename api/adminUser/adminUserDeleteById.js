let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_adminuserdeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.adminUserDeleteById(req.body.id);
    res.json($result)
}]