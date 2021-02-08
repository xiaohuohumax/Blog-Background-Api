let link = require('../../mongoose/link');

let articleEnum = require('../../mongoose/articleEnum');

module.exports = async (req, res) => {
    let $result = req.$result();

    $result.data = await link.VideoMusicDeleteById(req.body.id);
    // 删除评论
    await link.commentDeleteByIdKind(articleEnum.video, req.body.id);
    res.json($result)
}