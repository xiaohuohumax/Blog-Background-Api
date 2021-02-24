let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_songinsert"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.SongInsert(req.body.params);
    res.json($result)
}]