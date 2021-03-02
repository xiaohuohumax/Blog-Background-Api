let link = require('../../mongoose/link');

let endecode = require('../../tools/endecode');

let authorityWebEnum = require('../../mongoose/authorityWebEnum');

const {
    authenWeb
} = require("../../model/authorizeWeb");

module.exports = async (req, res) => {
    let $result = req.$result(false, "查询出现意外!");

    let ids = [];

    for (let x = 0; x < 1; x++) {
        let sessionUser = req.session.userinf;

        if (sessionUser) {
            let result = await link.WebUserLogin(sessionUser.name, sessionUser.pass);

            if (result.length == 0) { // 此用户存在
                break;
            }

            let user = result[0];
            if (!user.allowLogin) {
                break;
            }

            $result.data.key = endecode.encode(`${sessionUser.name}{|}${sessionUser.pass}`);
            $result.data.inf = user;

            // 设置session
            req.session.userinf = user;

            // 更新信息
            link.WebUserUpdateById(user._id, {
                loginIp: ipFormat(req.ip),
                loginTime: new Date()
            });

            ids = ids.concat(user.roles);
        }
    }
    for (let x = 0; x < 1; x++) {

        let webSet = await link.webSetFindOnly();
        if (!webSet) {
            $result.msg = "服务器发生错误!";
            break;
        }

        ids = ids.concat(webSet.touristDefRoles);

        // 查询角色 用户角色与默认角色
        const roles = await link.WebRoleFindByIds(ids);
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
    }
    res.json($result)
}