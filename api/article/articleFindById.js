let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    await link.ArticleWatchById(req.body.id);
    $result.data = await link.ArticleFindById(req.body.id);
    res.json($result)
}