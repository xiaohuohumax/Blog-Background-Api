let link = require('../../mongoose/link');


async function deleteFile(id, result) {
    // 查询文件
    let file = await link.VirtualFileFindById(id);

    if (!file) {
        return;
    }

    if (file.kind == "dir") { // 文件夹

        let item = await link.VirtualFileFindItemById(file._id); // 子文件夹

        for (let val of item) {
            await deleteFile(val._id, result); // 递归删除
        }
    }
    await link.VirtualFileDeleteById(file._id); // 删除文件或文件夹
    result.sum++;
}

module.exports = async (req, res) => {

    let result = {
        flag: true,
        msg: "删除成功",
        sum: 0
    }
    await deleteFile(req.body.id, result);
    // 判断文件类型

    res.json(result)
}