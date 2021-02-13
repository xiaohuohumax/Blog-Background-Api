let link = require('../../mongoose/link');

module.exports = async (req, res, next) => {
    let result = await link.AdminUserByNameFindIcon(req.body.name);
    let icon = result.length > 0 ? result[0].icon : "";
    let $result = req.$result(result.length > 0, "查询成功", icon);
    res.json($result);
}