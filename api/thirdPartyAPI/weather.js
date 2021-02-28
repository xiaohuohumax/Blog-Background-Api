const http = require("../../tools/https")
const config = require("../../config")


module.exports = async (req, res) => {
    let $result = req.$result();
    let ip = (await http(config.thirdPartyAPI.axois.ip()))
    if (ip.status == 0) {
        throw new Error("查询失败!");
    }
    // 删除文章
    let weather = (await http(config.thirdPartyAPI.axois.weather(ip.city, req.body.extensions)));

    if (weather.status == 0) {
        throw new Error("查询失败!");
    }
    $result.data = {
        forecasts: weather.forecasts, // 预测
        lives: weather.lives // 实时
    };

    res.json($result)
}