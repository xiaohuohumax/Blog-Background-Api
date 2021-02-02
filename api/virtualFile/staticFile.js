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
    res.header("Content-Type", mime.lookup(id));
    res.sendFile(`${fileCache}/${id}`);
}