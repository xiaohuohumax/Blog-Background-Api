let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let {
        inf,
        key
    } = req.user;
    res.json({
        flag: true,
        message: "获取用户信息成功!",
        inf,
        key
    })
}