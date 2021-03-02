var multer = require('multer'); // 文件上传中间件
var config = require('../config');

// 文件上传限制
module.exports = {
    toolMulter: multer({
        dest: "./upload/tool",
        limits: {
            ...config.uploadFile.tool
        },
    }),
    fileMulter: multer({
        dest: "./upload/file",
        limits: {
            ...config.uploadFile.virtual
        },
    })
}