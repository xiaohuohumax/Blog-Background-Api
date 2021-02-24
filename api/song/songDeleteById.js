let link = require('../../mongoose/link');

let articleEnum = require('../../mongoose/articleEnum');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_songdeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.SongDeleteById(req.body.id);
    res.json($result)
}]