const http = require("../../tools/https")
const config = require("../../config")

module.exports = async (req, res) => {
    let $result = req.$result(false, "查询失败!");

    for (let x = 0; x < 1; x++) {
        // 依据ip 查询 城市id
        let ip = (await http(config.thirdPartyAPI.axois.ip()))
        if (ip.status == 0) {
            break;
        }
        // 依据城市 id 查询天气
        let weather = (await http(config.thirdPartyAPI.axois.weather(ip.city, req.body.extensions)));

        if (weather.status == 0) {
            break;
        }
        $result.flag = true;
        $result.msg = "查询成功!";
        $result.data = {
            forecasts: weather.forecasts, // 预测
            lives: weather.lives // 实时
        };
    }
    res.json($result)
}