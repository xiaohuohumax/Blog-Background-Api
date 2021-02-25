let fs = require('fs');
let path = require('path');
let mime = require("mime");
// /:id
// req.params.id
module.exports = async function (req, res) {
    let id = req.params.id; // 参数
    let fileCache = path.resolve('./static/files');

    let file = `${fileCache}/${id}`;

    if (!fs.existsSync(file)) {
        return res.sendStatus(404);
    }

    res.header("Content-Type", mime.lookup(id));
    res.sendFile(file);
}