let link = require('../../mongoose/link');

let articleEnum = require('../../mongoose/articleEnum');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource([""]),async (req, res) => {
    let $result = req.$result();
    // 删除文章
    $result.data = await link.ArticleDeleteById(req.body.id);
    // 删除评论
    await link.commentDeleteByIdKind(articleEnum.article, req.body.id);
    res.json($result)
}]