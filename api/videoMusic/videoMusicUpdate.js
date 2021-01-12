let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.VideoMusicUpdateById(req.body.id,req.body.newdata);
    res.json(result)
}