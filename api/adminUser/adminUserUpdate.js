let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.AdminUserUpdateById(req.body.id,req.body.params);
    res.json(result)
}