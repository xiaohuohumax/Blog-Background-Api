// ip 格式化 ::fffff: ::1 
function ipFormat(ip) {
    return ip.replace("::ffff:", "").replace("::1", "127.0.0.1")
}

module.exports = ipFormat;