let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    await link.ImageWatchById(req.body.id);
    $result.data = await link.ImageFindById(req.body.id);
    res.json($result)
}