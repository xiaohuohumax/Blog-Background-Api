let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    $result.data = await link.commentRandom(req.body.sum);
    res.json($result)
}