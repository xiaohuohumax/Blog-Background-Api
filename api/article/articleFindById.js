let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    await link.ArticleWatchById(req.body.id);
    let result = await link.ArticleFindById(req.body.id);
    res.json(result)
}