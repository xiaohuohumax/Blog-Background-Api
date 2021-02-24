let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_playlistinsert"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.PlayListInsert(req.body.params);
    res.json($result)
}]