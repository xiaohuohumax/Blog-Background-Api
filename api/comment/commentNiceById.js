let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.CommentNiceById(req.body.id,req.body.inc);
    res.json(result)
}