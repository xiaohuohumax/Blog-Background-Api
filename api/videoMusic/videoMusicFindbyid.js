let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    try {
        await link.VideoMusicWatchById(req.body.id);
        $result.data = await link.VideoMusicFindById(req.body.id);
    } catch (error) {
        return res.sendStatus(404);
    }
    res.json($result)
}