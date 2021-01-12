let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let result = await link.ImageUpdateById(req.body.id,req.body.newdata);
    res.json(result)
}