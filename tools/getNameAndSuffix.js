// 获取名字与后缀名
module.exports = function getNameAndSuffix(name) {
    let index = name.lastIndexOf(".");
    let suffix = name.substring(index);
    let fileName = name.substring(0, index);
    if (index == -1) {
        fileName = name;
        suffix = "";
    }
    return [fileName, suffix];
}