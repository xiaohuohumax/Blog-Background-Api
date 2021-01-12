let link = require('../../mongoose/link');

module.exports = async (req, res) => {

    let {
        parentId
    } = req.body;
    let result = await link.VirtualFileFind({
        parentId: parentId ? parentId : '-1'
    });
    res.json(result)
}