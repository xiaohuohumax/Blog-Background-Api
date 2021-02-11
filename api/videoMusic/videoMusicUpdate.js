let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource([""]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.VideoMusicUpdateById(req.body.id, req.body.newdata);
    res.json($result)
}]