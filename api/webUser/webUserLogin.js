let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');
let ipFormat = require('../../tools/ipFormat');

let authorityWebEnum = require('../../mongoose/authorityWebEnum');

const {
    authenWeb
} = require("../../model/authorizeWeb");
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

        $result.data.key = endecode.encode(`${name}{|}${pass}`);
        let inf = result[0];
        $result.data.inf = result[0];

        // 设置session
        req.session.userinf = user;

        let webSet = await link.webSetFindOnly();
        if (!webSet) {
            $result.msg = "服务器发生错误!";
            break;
        }

        // 查询角色 用户角色与默认角色
        const roles = await link.WebRoleFindByIds([...user.roles, ...webSet.touristDefRoles]);
        const rolesCode = roles.map(val => val.code);

        $result.data.roles = roles;
        // 查询资源
        const resourcesId = Array.from(new Set(roles.map(val => val.resources).flat()));
        const resources = await link.WebResourceFindByIds(resourcesId);
        const resourcesCode = resources.map(val => val.code);

        $result.data.resources = resources;

        // 认证
        authenWeb(req, rolesCode, resourcesCode);

        // 产生菜单栏
        const resourceKind = authorityWebEnum.menu.code;

        const rootMenu = []

        const itemMenu = []

        resources.forEach(val => {
            if (val.kind == resourceKind && val.parentId == "-1") {
                rootMenu.push(val);
            } else {
                itemMenu.push(val);
            }
        })

        // 菜单显示
        const menu = [];
        rootMenu.sort((a, b) => a.index - b.index).forEach(val => {
            let item = {
                name: val.name,
                icon: val.icon,
                path: val.path,
                // 子项
                items: itemMenu.filter(valItem => valItem.parentId == val._id.toString()).map(val => ({
                    name: val.name,
                    path: val.path,
                    icon: val.icon,
                })),
            }
            menu.push(item)
        })
        $result.data.menu = menu;

        $result.flag = true;
        $result.msg = "查询成功!";

        // 更新信息
        link.WebUserUpdateById(inf._id, {
            loginIp: ipFormat(req.ip),
            loginTime: new Date()
        });
    }

    res.json($result)
}