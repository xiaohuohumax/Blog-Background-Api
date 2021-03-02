let link = require('../../mongoose/link');

let endecode = require('../../tools/endecode');


module.exports = async (req, res) => {
    let $result = req.$result(false, "查询失败!");
    let userinf = req.session.userinf;

    for (let x = 0; x < 1; x++) {
        if (!userinf) {
            break;
        }
        userinf = (await link.WebUserFindAllById(userinf._id))[0];
        if (!userinf) {
            break;
        }
        $result.flag = true;
        $result.msg = "查询成功!";
        if (userinf.allowLogin) {

            $result.data.key = endecode.encode(`${userinf.name}{|}${userinf.pass}`);
            $result.data.inf = userinf;
            // 设置session
            req.session.userinf = userinf;

        } else {
            $result.data.inf = {
                allowLogin: false
            };
            // 设置session
            req.session.userinf = undefined;
        }
    }

    res.json($result);
}