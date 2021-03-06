let link = require('../../mongoose/link');

let articleEnum = require('../../mongoose/articleEnum');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_imagedeletebyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.ImageDeleteById(req.body.id);
    // 删除评论
    await link.commentDeleteByIdKind(articleEnum.image, req.body.id);
    res.json($result)
}]