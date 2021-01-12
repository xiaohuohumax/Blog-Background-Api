let link = require('../../mongoose/link');

module.exports = async (req, res, next) => {
    let webSet = await link.webSetFindOnly();
    webSet && webSet.webState ? next() : res.sendStatus(403); // 服务器维修状态 切换
}