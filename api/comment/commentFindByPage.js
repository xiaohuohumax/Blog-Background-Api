let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    $result.data = await link.CommentFindByPage(
        req.body.page,
        req.body.pageSteep,
        req.body.articleId,
        req.body.kind);
    res.json($result)
}