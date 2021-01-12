let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    await link.VideoMusicWatchById(req.body.id);
    let result = await link.VideoMusicFindById(req.body.id);
    res.json(result)
}