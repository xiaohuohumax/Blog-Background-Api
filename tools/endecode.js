const crypto = require('crypto');
const config = require('../config.js');
module.exports = {
    // 解密
    decode: function (dataStr) {
        let cipherChunks = [];
        let decipher = crypto.createDecipheriv('aes-128-cbc', config.encodeDecodeKey, config.encodeDecodeiv);
        decipher.setAutoPadding(true);
        cipherChunks.push(decipher.update(dataStr, 'base64', 'utf8'));
        cipherChunks.push(decipher.final('utf8'));
        return cipherChunks.join('');
    },
    // 加密
    encode: function (dataStr) {
        let cipherChunks = [];
        let cipher = crypto.createCipheriv('aes-128-cbc', config.encodeDecodeKey, config.encodeDecodeiv);
        cipher.setAutoPadding(true);
        cipherChunks.push(cipher.update(dataStr, 'utf8', 'base64'));
        cipherChunks.push(cipher.final('base64'));
        return cipherChunks.join('');
    },
}