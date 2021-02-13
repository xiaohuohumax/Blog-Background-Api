let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_videomusicinsert"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.VideoMusicInsert(req.body.params);
    res.json($result)
}]