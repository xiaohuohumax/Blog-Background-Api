let config = require('../config');

let serverOrigin = require("./serverOrigin")
// 属于本网站的 url 的 origin 部分 转化

// http:127.0.0.1:8000/path... => $encode_key/path...

module.exports = {
    urlOriginEncode(str) { // 编码
        if (typeof (str) != "string") return str;
        return str.replace(serverOrigin.expressOrigin, config.urlOrigin.encodeKey);
    },

    urlOriginDecode(str) { // 解码
        if (typeof (str) != "string") return str;
        return str.replace(config.urlOrigin.encodeKey, serverOrigin.expressOrigin);
    },
};