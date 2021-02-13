let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityfindresourcebyids"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.ResourceFindByIds(req.body.ids);
    res.json($result)
}]