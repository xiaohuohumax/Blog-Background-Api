let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    await link.TooleWatchById(req.body.id);
    $result.data = await link.ToolFindById(req.body.id);
    res.json($result)
}