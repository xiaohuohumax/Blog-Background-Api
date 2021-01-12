let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    await link.ImageWatchById(req.body.id);
    let result = await link.ImageFindById(req.body.id);
    res.json(result)
}