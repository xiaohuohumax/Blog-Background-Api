let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.VideoMusicInsert(req.body);
    res.json(result)
}