let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_commentdeletebyid"]),async (req, res) => {
    let $result = req.$result();
    // 删除评论
    $result.data = await link.commentDeleteById(req.body.id);
    res.json($result)
}]