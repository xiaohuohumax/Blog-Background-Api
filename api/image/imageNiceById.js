let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    $result.data = await link.ImageNiceById(req.body.id,req.body.inc);
    res.json($result)
}