let config = require('../config');

function getIPAdress() {
    if (config.localhost != "") {
        return config.localhost;
    }
    console.log("asdasd")
    let interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address
            }
        }
    }
}

module.exports = getIPAdress();