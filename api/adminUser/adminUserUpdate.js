let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    $result.data = await link.AdminUserUpdateById(req.body.id, req.body.params);
    res.json($result)
}