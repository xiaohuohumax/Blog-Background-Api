let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');
let ipFormat = require('../../tools/ipFormat');

module.exports = async (req, res) => {
    let {
        name,
        pass,
        code
    } = req.body;
    let $result = req.$result(false);


    for (let x = 0; x < 1; x++) {
        if (code != req.session.captcha) {
            $result.msg = "验证码错误!";
            break;
        }

        let result = await link.WebUserLogin(name, pass);


        if (result.length == 0) { // 此用户存在
            $result.msg = "登录失败,请检查!";
            break;
        }

        let user = result[0];
        if (!user.allowLogin) {
            $result.msg = "你已被限制登录!";
            break;
        }

        $result.flag = true;
        $result.data.key = endecode.encode(`${name}{|}${pass}`);
        let inf = result[0];
        $result.data.inf = result[0];

        // 设置session
        req.session.userinf = user;

        // 更新信息
        link.WebUserUpdateById(inf._id, {
            loginIp: ipFormat(req.ip),
            loginTime: new Date()
        });
    }

    res.json($result)
}