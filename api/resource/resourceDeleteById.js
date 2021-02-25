let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_resourcedeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.ResourceDeleteById(req.body.id);
    res.json($result)
}]