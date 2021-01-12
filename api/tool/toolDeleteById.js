let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    // 删除文章
    let result = await link.ToolDeleteById(req.body.id);
    res.json(result)
}