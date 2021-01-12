let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    await link.TooleWatchById(req.body.id);
    let result = await link.ToolFindById(req.body.id);
    res.json(result)
}