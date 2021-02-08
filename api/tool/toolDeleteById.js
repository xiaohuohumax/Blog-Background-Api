let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    // 删除文章
    $result.data = await link.ToolDeleteById(req.body.id);
    res.json($result)
}