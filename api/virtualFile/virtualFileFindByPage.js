let link = require('../../mongoose/link');

module.exports = async (req, res) => {

    let {
        parentId,
        page,
        pageSteep,
        selectWord
    } = req.body;
    parentId = parentId ? parentId : '-1'
    let result = await link.VirtualFileFindByPage(page, pageSteep, parentId,selectWord);
    res.json(result)
}