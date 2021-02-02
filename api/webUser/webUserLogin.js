let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');
let ip = require('../../tools/ipByReq');

module.exports = async (req, res) => {
    let {
        name,
        pass,
        code
    } = req.body;
    let key, inf, flag = false;

    for (let x = 0; x < 1; x++) {
        if (code != req.session.captcha) {
            inf = "验证码错误!";
            break;
        }

        let result = await link.WebUserLogin(name, pass);


        if (result.length == 0) { // 此用户存在
            inf = "登录失败,请检查!";
            break;
        }

        let user = result[0];
        if (!user.allowLogin) {
            inf = "你已被限制登录!";
            break;
        }

        flag = true;
        key = endecode.encode(`${name}{|}${pass}`);
        inf = result[0];

        // 设置session
        req.session.userinf = user;

        // 更新信息
        link.WebUserUpdateById(inf._id, {
            loginIp: ip(req),
            loginTime: new Date()
        });
    }

    res.json({
        flag,
        key,
        inf
    })
}