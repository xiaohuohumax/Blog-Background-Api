let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');
let ipFormat = require('../../tools/ipFormat');

let authorityEnum = require('../../mongoose/authorityEnum');

const {
    authenAdmin
} = require("../../model/authorizeAdmin");

module.exports = async (req, res) => {
    let {
        name,
        pass
    } = req.body;

    let $result = req.$result(false);

    for (let x = 0; x < 1; x++) {
        let result = await link.AdminUserLogin(name, pass);
        // 检查用户
        if (result.length <= 0) {
            $result.msg = "登录失败,请检查!";
            break;
        }
        let user = result[0];
        // 是否允许登录
        if (!user.allowLogin) {
            $result.msg = "你已被限制登录!";
            break;
        }
        $result.flag = true;
        $result.data.key = endecode.encode(`${name}{|}${pass}`);
        $result.data.inf = user;

        // 保存session 用户信息
        req.session.admininf = user;
        // 查询角色
        const roles = await link.RoleFindByIds(user.roles);
        const rolesCode = roles.map(val => val.code);

        $result.data.roles = roles;
        // 查询资源
        const resourcesId = Array.from(new Set(roles.map(val => val.resources).flat()));
        const resources = await link.ResourceFindByIds(resourcesId);
        const resourcesCode = resources.map(val => val.code);

        $result.data.resources = resources;

        // 认证
        authenAdmin(req, rolesCode, resourcesCode);

        // 产生菜单栏
        const resourceKind = authorityEnum.menu.code;

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
                // 子项
                items: itemMenu.filter(valItem => valItem.parentId == val._id.toString()).map(val => ({
                    name: val.name,
                    path: val.path
                })),
            }
            menu.push(item)
        })
        $result.data.menu = menu;
        // 更新信息
        await link.AdminUserUpdateById(user._id, {
            loginIp: ipFormat(req.ip),
            loginTime: new Date()
        });
    }
    res.json($result)
}