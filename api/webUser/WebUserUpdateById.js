let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.WebUserUpdateById(req.body.id, req.body.params);
    res.json(result);
}