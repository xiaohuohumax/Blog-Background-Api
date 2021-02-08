let link = require('../../mongoose/link');

module.exports = async (req, res) => {

    let $result = req.$result();
    let {
        parentId
    } = req.body;
    $result.data = await link.VirtualFileFind({
        parentId: parentId ? parentId : '-1'
    });
    res.json($result)
}