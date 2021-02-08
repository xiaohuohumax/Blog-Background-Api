let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');
let ip = require('../../tools/ipByReq');

module.exports = async (req, res) => {
    let {
        name,
        pass
    } = req.body;
    let result = await link.AdminUserLogin(name, pass);

    let $result = req.$result();
    $result.flag = false;

    if (result.length > 0) { // 此用户存在
        let user = result[0];
        if (user.allowLogin) {
            $result.flag = true;
            $result.data.key = endecode.encode(`${name}{|}${pass}`);
            let inf = result[0];
            $result.data.inf = inf;

            req.session.admininf = user;

            // 更新信息
            await link.AdminUserUpdateById(inf._id, {
                loginIp: ip(req),
                loginTime: new Date()
            });

        } else {
            $result.msg = "你已被限制登录!";
        }
    } else {
        $result.msg = "登录失败,请检查!";
    }

    res.json($result)
}