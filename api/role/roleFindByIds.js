let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_rolefindbyids"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.RoleFindByIds(req.body.ids);
    res.json($result)
}]