let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.webUpdate(req.body.params);
    res.json(result)
}