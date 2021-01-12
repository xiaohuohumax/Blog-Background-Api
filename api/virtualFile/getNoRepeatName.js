let link = require('../../mongoose/link');
let getNameAndSuffix = require('../../tools/getNameAndSuffix');
let timeFormat = require('../../tools/timeFormat');

// 获取不重复文件名 name 新名字, parentId 所处目录 notYourself 是否不包括自己, id 自己id
module.exports = async function getNoRepeatName(name, parentId = "-1", notYourself = false, id = null) {
    // 查询同层所有文件
    let itemFile = await link.VirtualFileFind({
        parentId
    });
    let flag; // 修改标志
    let [fileName, suffix] = getNameAndSuffix(name); // 获取文件名和后缀名
    do {
        flag = false;
        for (let item of itemFile) {
            if (notYourself && id == item._id) continue; // 跳过自己
            if (item.name == name) {
                name = `${fileName}(${timeFormat("YYYY-mm-dd_HH-MM-SS",new Date())})${suffix}`;
                flag = true;
                break;
            }
        }
    } while (flag);
    return name;
}