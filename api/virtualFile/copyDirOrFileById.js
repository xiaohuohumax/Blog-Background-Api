let link = require('../../mongoose/link');
let getNameAndSuffix = require('../../tools/getNameAndSuffix');
let timeFormat = require('../../tools/timeFormat');

// 复制文件 或文件夹 通过id
module.exports = async function getNoRepeatName(id) {
    // 被复制的文件夹
    let copyResource = await link.VirtualFileFindByIdNotId(id);
    // delete copyResource._doc._id;
    let copyFile;

    if (copyResource.kind == "dir") { // 文件夹

    } else { // 文件
        // copyFile = await link.VirtualFileInsert(copyResource);
    }
    console.log(copyResource, copyFile)
}