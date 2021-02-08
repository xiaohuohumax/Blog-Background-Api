let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    let {
        parentId,
        page,
        pageSteep,
        selectWord
    } = req.body;
    parentId = parentId ? parentId : '-1'
    $result.data = await link.VirtualFileFindByPage(page, pageSteep, parentId,selectWord);
    res.json($result)
}