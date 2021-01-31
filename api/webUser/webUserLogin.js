let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');
let ip = require('../../tools/ipByReq');

module.exports = async (req, res) => {
    let {
        name,
        pass
    } = req.body;
    let result = await link.WebUserLogin(name, pass);


    let key, inf, flag = false;
    if (result.length > 0) { // 此用户存在
        let user = result[0];
        if (user.allowLogin) {
            flag = true;
            key = endecode.encode(`${name}{|}${pass}`);
            inf = result[0];

            // 更新信息
            await link.WebUserUpdateById(inf._id, {
                loginIp: ip(req),
                loginTime: new Date()
            });

            // 设置session
            req.session.userinf = user;
            // console.log(user)

        } else {
            inf = "你已被限制登录!";
        }
    }else{
        inf = "登录失败,请检查!";
    }
    res.json({
        flag,
        key,
        inf
    })
}