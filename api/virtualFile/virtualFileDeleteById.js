let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");

async function deleteFile(id, result = 0) {
    // 查询文件
    let file = await link.VirtualFileFindById(id);

    if (!file) return;

    if (file.kind == "dir") { // 文件夹
        let item = await link.VirtualFileFindItemById(file._id); // 子文件夹

        for (let val of item) {
            result = await deleteFile(val._id, result); // 递归删除
        }
    }
    await link.VirtualFileDeleteById(file._id); // 删除文件或文件夹
    return result + 1;
}

module.exports = [authAdminByResource(["api_virtualfiledeletebyid"]), async (req, res) => {
    let $result = req.$result(true, "删除成功");

    $result.data.sum = await deleteFile(req.body.id);
    res.json($result)
}]