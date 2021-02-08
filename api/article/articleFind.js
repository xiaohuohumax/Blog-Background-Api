let link = require('../../mongoose/link');

module.exports = async (req,res) => {
    let $result = req.$result();
    $result = await link.ArticleFind({});
    res.json($result)
}