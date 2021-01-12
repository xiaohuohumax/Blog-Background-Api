function getIPAdress(req) {
    return req.ip.replace("::ffff:", "").replace("::1", "127.0.0.1")
}

module.exports = getIPAdress;