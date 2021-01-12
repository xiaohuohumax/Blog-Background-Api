let link = require('../../mongoose/link');
let getNoRepeatName = require('./getNoRepeatName');

module.exports = async (req, res) => {
    let name = await getNoRepeatName(req.body.name,req.body.parentId,true,req.body.id);
    let result = await link.VirtualFileUpdateById(req.body.id, {
        name, // 文件名
    });
    res.json(result);
}