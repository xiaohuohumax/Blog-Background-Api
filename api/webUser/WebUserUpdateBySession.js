let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');

module.exports = async (req, res) => {
    let $result = req.$result(false, "修改失败!");

    let userinf = req.session.userinf;
    if (!userinf) {
        return res.sendStatus(401);
    }
   
    for (let x = 0; x < 1; x++) {
        try {
            await link.WebUserUpdateById(userinf._id, req.body.params);
            userinf = (await link.WebUserFindAllById(userinf._id))[0];
            if (!userinf) throw new Error("");
        } catch (error) {
            $result.msg = "用户不存在!";
            break;
        }
        const {
            name,
            pass
        } = userinf;

        $result.data.key = endecode.encode(`${name}{|}${pass}`);
        $result.data.inf = userinf;

        // 设置session
        req.session.userinf = userinf;
        $result.flag = true;
        $result.msg = "修改成功!";
    }

    res.json($result);
}