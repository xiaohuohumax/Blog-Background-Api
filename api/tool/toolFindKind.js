let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    // 查询类型
    $result.data = await link.ToolFindKind(req.body.select);
    res.json($result)
}