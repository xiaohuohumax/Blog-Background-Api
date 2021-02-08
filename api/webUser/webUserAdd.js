let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result(false, "");
    // 检查用户是否存在
    let isExisit = await link.WebUserFindByName(req.body.name);
    if (isExisit) {
        $result.msg = "此用户已被注册";
        $result.flag = false;
    } else {
        await link.WebUserAdd(req.body.name, req.body.pass);
        $result.msg = "注册成功";
        $result.flag = true;
    }
    res.json($result)
}