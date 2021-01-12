var multer = require('multer'); // 文件上传中间件

module.exports = {
    toolMulter: multer({
        dest: "./upload/tool",
        limits: {
            fileSize: 1024 * 1024 * 1000,
            files: 5
        },
    }),
    fileMulter: multer({
        dest: "./upload/file",
        limits: {
            fileSize: 1024 * 1024 * 100000,
            files: 5
        },
    })
}