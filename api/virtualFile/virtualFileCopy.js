let link = require('../../mongoose/link');
let getMD5 = require('../../tools/md5');
let path = require('path');
let fs = require('fs');

let getNoRepeatName = require('./getNoRepeatName');
let copyDirOrFileById = require('./copyDirOrFileById');

module.exports = async (req, res) => {

    let ids = req.body.ids; // 
    let parentId = req.body.parentId; // 目标文件夹 id

    let result = {
        flag: true,
        msg: "未实现!",
        sum: 0,
        nameNoRepeat: 0,
        nameRepeat: 0
    }
    for (let id of ids) {
        await copyDirOrFileById(id);
    }

    // for (let id of ids) {
    //     let item = await link.VirtualFileFindById(id);
    //     result.sum++;
    //     if (item.parentId == parentId) continue; // 未移动
    //     let name = await getNoRepeatName(item.name, parentId);
    //     if (name == item.name) { // 不存在重名文件
    //         await link.VirtualFileUpdateById(item._id, {
    //             parentId, // 文件名
    //         });
    //         result.nameNoRepeat++;
    //     } else {
    //         result.nameRepeat++;
    //     }
    // }
    // console.log(result)
    res.json(result);
}