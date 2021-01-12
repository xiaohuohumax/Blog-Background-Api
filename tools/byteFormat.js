// 字节转换
module.exports = function bytesToSize(bytes) {
    if (bytes === 0) return '0B';
    let k = 1024;
    let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toPrecision(2)}${sizes[i]}`;
}