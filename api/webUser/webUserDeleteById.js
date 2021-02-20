let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webuserdeletebyid"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.WebUserDeleteById(req.body.id);
    // 删除评论
    await link.CommentDeleteByUser(req.body.id);
    // 删除弹幕
    await link.DanMuDeleteByUser(req.body.id);

    res.json($result)
}]