let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let resFlag = {
        flag: false,
        message: "",
    }
    // 检查用户是否存在
    let isExisit = await link.AdminUserFindByName(req.body.name);
    if (isExisit) {
        resFlag.message = "此用户已被注册";
        resFlag.flag = false;

    } else {
        await link.AdminUserAdd(req.body);
        resFlag.message = "注册成功";
        resFlag.flag = true;
    }
    res.json(resFlag)
}