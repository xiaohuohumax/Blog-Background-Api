let link = require('../../mongoose/link');

let websocketCode = require('../../websocket/websocketCode');

module.exports = async (req, res) => {

    let result = await link.webUpdate(req.body.params);

    // 刷新网站设置
    req.websocketModel.sendJsonToAllUser(websocketCode.FLUSH_WEBSET, {
        msg: ""
    })

    res.json(result)
}