let fs = require('fs');
let crypto = require('crypto');

// 读取文件 md5值
module.exports = function getMD5(path) {
    return new Promise((resolve) => {
        //从文件创建一个可读流
        let stream = fs.createReadStream(path);
        let fsHash = crypto.createHash('md5');
        stream.on('data', function (d) {
            fsHash.update(d);
        });
        stream.on('end', function () {
            // 返回 md5 值
            resolve(fsHash.digest('hex'))
        });
    })
}