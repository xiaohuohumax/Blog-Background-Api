let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.CommentFindById(req.body.id);
    res.json(result)
}