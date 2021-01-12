let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.commentRandom(req.body.sum);
    res.json(result)
}