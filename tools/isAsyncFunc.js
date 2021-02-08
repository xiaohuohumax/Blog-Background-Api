// 检验函数是否是async 函数
module.exports = (func) => func && func.constructor && func.constructor.name == "AsyncFunction"