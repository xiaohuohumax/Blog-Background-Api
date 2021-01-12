let link = require('../../mongoose/link');
let getMD5 = require('../../tools/md5');
let path = require('path');
let fs = require('fs');
let getNoRepeatName = require('./getNoRepeatName');

module.exports = async (req, res) => {
    // 解压缓存路径
    let fileCache = path.resolve('./static/files');

    let result = {
        flag: true,
        msg: "上传成功!"
    };

    var file = req.file; // 上传的文件
    let name = file.originalname; // 源文件名字
    let size = file.size; // 文件大小
    let tempPath = file.path; // 缓存位置(绝对路径)
    let md5 = await getMD5(tempPath); // 获取md5
    let filePath = path.join(fileCache, md5); // 游戏存储路径

    // 文件转移改名
    try {
        fs.renameSync(tempPath, filePath);
    } catch (error) {
        console.log(error)
        result.lag = false;
        result.msg = "转移失败!";
    }

    try {
        if (fs.existsSync(tempPath)) {
            fs.unlinkSync(tempPath);
        }
    } catch (error) {
        console.log(error)
    }
    name = await getNoRepeatName(name, req.body.parentId);
    result.flag ? await link.VirtualFileInsert({
        adminId: req.body.adminId, // 用户id
        parentId: req.body.parentId, // 父目录
        name, // 文件名
        md5, // 文件保存md5
        size,
        kind: "file" // dir 文件夹 file 文件
    }) : '';

    // 解压
    res.json(result);
}