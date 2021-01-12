let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    // 查询类型
    let result = await link.ToolFindKind(req.body.select);
    res.json(result)
}