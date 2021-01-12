let link = require('../../mongoose/link');

module.exports = async (req, res) => {

    let result = await link.VirtualFileFindByName(req.body.name);
    res.json(result)
}