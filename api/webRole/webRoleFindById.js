let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webrolefindbyid"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.WebRoleFindById(req.body.id);
    res.json($result)
}]