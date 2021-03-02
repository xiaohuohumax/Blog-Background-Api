let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webresourcefindbypageandids"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.WebResourceFindByPageAndIds(req.body.page, req.body.pageSteep, req.body.select, req.body.ids);
    res.json($result)
}]