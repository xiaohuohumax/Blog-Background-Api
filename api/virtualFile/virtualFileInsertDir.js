let link = require('../../mongoose/link');
let getNoRepeatName = require('./getNoRepeatName');

module.exports = async (req, res) => {

    let name = await getNoRepeatName(req.body.name,req.body.parentId);
    let result = await link.VirtualFileInsert({
        adminId: req.body.adminId, // 用户id
        parentId: req.body.parentId, // 父目录
        name, // 文件名
        kind: "dir" // dir 文件夹 file 文件
    });
    res.json(result);
}