let link = require('../../mongoose/link');

let articleEnum = require('../../mongoose/articleEnum');

module.exports = async (req, res) => {
    let result = await link.ImageDeleteById(req.body.id);
    // 删除评论
    await link.commentDeleteByIdKind(articleEnum.image, req.body.id);
    res.json(result)
}