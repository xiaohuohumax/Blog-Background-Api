let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityFindResourceByPageAndIds"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.authorityFindResourceByPageAndIds(req.body.page, req.body.pageSteep, req.body.select, req.body.ids);
    res.json($result)
}]