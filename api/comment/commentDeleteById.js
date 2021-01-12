let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    // 删除评论
    let result = await link.commentDeleteById(req.body.id);
    res.json(result)
}