let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_adminuserfindbyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.AdminUserFindById(req.body.id);
    res.json($result)
}]