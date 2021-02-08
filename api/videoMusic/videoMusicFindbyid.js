let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    await link.VideoMusicWatchById(req.body.id);
    $result.data = await link.VideoMusicFindById(req.body.id);
    res.json($result)
}