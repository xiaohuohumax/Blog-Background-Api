let link = require('../../mongoose/link');

module.exports = async (req, res, next) => {
    let result = await link.AdminUserByNameFindIcon(req.body.name);
    let icon = result ? result.icon : "";
    let $result = req.$result(!!result, "查询成功", icon);
    res.json($result);
}