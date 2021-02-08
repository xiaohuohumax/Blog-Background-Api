let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    // 检查用户是否存在
    let isExisit = await link.AdminUserFindByName(req.body.name);
    if (isExisit) {
        $result.msg = "此用户已被注册";
        $result.flag = false;
    } else {
        await link.AdminUserAdd(req.body);
        $result.msg = "注册成功";
        $result.flag = true;
    }
    res.json($result)
}