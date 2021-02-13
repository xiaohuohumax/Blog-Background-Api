let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityfindresourcebypage"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.authorityFindRresourceByPage(req.body.page, req.body.pageSteep, req.body.select);
    res.json($result)
}]