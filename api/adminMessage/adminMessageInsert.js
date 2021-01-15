let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.AdminMessageInsert(req.body.adminId,req.body.message);
    res.json(result)
}