let link = require('../../mongoose/link');

let articleEnum = require('../../mongoose/articleEnum');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_playlistdeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.PlayListDeleteById(req.body.id);
    res.json($result)
}]