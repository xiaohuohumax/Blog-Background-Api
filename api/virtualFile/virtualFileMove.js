let link = require('../../mongoose/link');

let getNoRepeatName = require('./getNoRepeatName');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_virtualfilemove"]),async (req, res) => {

    let $result = req.$result(true, "移动成功!");
    let ids = req.body.ids; // [""]
    let parentId = req.body.parentId; // 默认根目录

    $result.data = {
        sum: 0,
        nameNoRepeat: 0,
        nameRepeat: 0
    }

    for (let id of ids) {
        let item = await link.VirtualFileFindById(id);
        $result.data.sum++;
        if (item.parentId == parentId) continue; // 未移动
        let name = await getNoRepeatName(item.name, parentId);
        if (name == item.name) { // 不存在重名文件
            await link.VirtualFileUpdateById(item._id, {
                parentId, // 文件名
            });
            $result.data.nameNoRepeat++;
        } else {
            $result.data.nameRepeat++;
        }
    }
    res.json($result);
}]