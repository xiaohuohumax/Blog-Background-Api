let link = require('../../mongoose/link');
let articleEnum = require('../../mongoose/articleEnum');

module.exports = async (req, res) => {
    let {
        id,
        kind
    } = req.body;
    let result;

    if (kind == articleEnum.article) {
        result = await link.ArticleFindById(id);
    }else if (kind == articleEnum.video) {
        result = await link.VideoMusicFindById(id);
    }else if (kind == articleEnum.image) {
        result = await link.ImageFindById(id);
    }
    res.json(result)
}