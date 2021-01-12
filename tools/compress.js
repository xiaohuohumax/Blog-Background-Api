let compressing = require('compressing')
module.exports = {
    // 压缩 tar
    compress(compress, destination) {
        return compressing.zip.compressDir(compress, destination,(inf)=>{
            console.log(inf);
        })
    },
    // 解压 tar
    uncompress(compress, destination) {
        return compressing.zip.uncompress(compress, destination)
    }
}