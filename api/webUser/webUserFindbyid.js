let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.WebUserFindById(req.body.id);
    res.json(result)
}