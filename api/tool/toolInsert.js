let link = require('../../mongoose/link');
let getMD5 = require('../../tools/md5');
let compress = require('../../tools/compress');
let deleteDir = require('../../tools/deleteDir');
let path = require('path');
let fs = require('fs');

const {
    toolMulter,
} = require('../../tools/multers');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [
    authAdminByResource(["api_toolinsert"]),
    toolMulter.single("file"),
    async (req, res) => {
        // 解压缓存路径
        let gameCache = path.resolve('./static/tools');

        let $result = req.$result(true, "上传成功");

        var file = req.file; // 上传的文件

        let tempPath = file.path; // 缓存位置(绝对路径)
        let md5 = await getMD5(tempPath); // 获取md5
        let gamePath = path.join(gameCache, md5); // 游戏存储路径

        if (!fs.existsSync(gamePath)) { // 不存在则解压
            try {
                await compress.uncompress(tempPath, gamePath)
            } catch (error) {}
        }
        if (!fs.existsSync(path.join(gamePath, "index.html"))) {
            $result.msg = "压缩包中未检测到 index.html !";
            $result.flag = false;
            try {
                if (fs.existsSync(gamePath)) {
                    deleteDir(gamePath);
                }
            } catch (error) {
                console.log(error)
            }
        }
        try {
            if (fs.existsSync(tempPath)) {
                fs.unlinkSync(tempPath);
            }
        } catch (error) {
            console.log(error)
        }

        $result.flag ? await link.ToolInsert({
            md5,
            ...req.body
        }) : "";

        res.json($result);
    }
]