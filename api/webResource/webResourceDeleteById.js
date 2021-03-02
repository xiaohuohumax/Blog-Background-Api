let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webresourcedeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.WebResourceDeleteById(req.body.id);
    res.json($result)
}]