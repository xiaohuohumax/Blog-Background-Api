let link = require('../../mongoose/link');

module.exports = async (req,res) => {
    let result = await link.NoticeFindTop();
    res.json(result)
}