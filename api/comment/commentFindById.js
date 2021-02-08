let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    $result.data = await link.CommentFindById(req.body.id);
    res.json($result)
}