let link = require('../../mongoose/link');
let getNoRepeatName = require('./getNoRepeatName');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_virtualfileinsertdir"]),async (req, res) => {
    let $result = req.$result();
    let name = await getNoRepeatName(req.body.name,req.body.parentId);
    $result.data = await link.VirtualFileInsert({
        adminId: req.body.adminId, // 用户id
        parentId: req.body.parentId, // 父目录
        name, // 文件名
        kind: "dir" // dir 文件夹 file 文件
    });
    res.json($result);
}]