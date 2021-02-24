let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_songupdate"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.SongUpdateById(req.body.id,req.body.newdata);
    res.json($result)
}]