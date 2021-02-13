let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_noticedeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.NoticeDeleteById(req.body.id);
    res.json($result)
}]