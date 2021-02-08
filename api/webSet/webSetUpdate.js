let link = require('../../mongoose/link');

let websocketCode = require('../../model/websocket/websocketCode');

module.exports = async (req, res) => {

    let $result = req.$result(true, "移动成功!");
    $result.data = await link.webUpdate(req.body.params);

    // 刷新网站设置
    req.$websocketModel.sendJsonToAllUser(websocketCode.FLUSH_WEBSET, {
        msg: ""
    })

    res.json($result)
}