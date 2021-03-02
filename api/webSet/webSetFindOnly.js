let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result(true, "查询成功!");
    $result.data = await link.webSetFindOnly();
    res.json($result)
}