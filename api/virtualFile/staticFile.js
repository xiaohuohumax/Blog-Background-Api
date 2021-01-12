let link = require('../../mongoose/link');
let path = require('path');
let mime = require("mime");
// /:id
// req.params.id
module.exports = async function (req, res) {
    let id = req.params.id; // 参数

    let fileCache = path.resolve('./static/files');

    if (!id) {
        return res.json({
            flag: false,
            message: '参数错误!'
        }).end();
    }

    let item = await link.VirtualFileFindById(id);
    if (item) {
        res.header("Content-Type", mime.getType(item.name));
        res.sendFile(`${fileCache}/${item.md5}`);
    } else {
        res.status(403).send("Sorry! You can't see that.");
    }
}