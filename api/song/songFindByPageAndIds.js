let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_songFindByPageAndIds"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.SongFindByPageAndIds(req.body.page, req.body.pageSteep, req.body.select, req.body.ids);
    res.json($result)
}]