let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.AdminUserByNameFindIcon(req.body.name);
    let icon = result.length > 0 ? result[0].icon : "";
    res.json(icon)
}