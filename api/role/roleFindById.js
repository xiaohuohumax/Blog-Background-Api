let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_rolefindbyid"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.RoleFindById(req.body.id);
    res.json($result)
}]