let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    // 删除评论
    $result.data = await link.commentDeleteById(req.body.id);
    res.json($result)
}