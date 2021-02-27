let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');
let authorityEnum = require('../../mongoose/authorityEnum');
let ipFormat = require('../../tools/ipFormat');

const {
    authenAdmin,
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_adminwuserfindbysession"]), async (req, res) => {
    let $result = req.$result(false, "查询失败!");
    let admininf = req.session.admininf;
    if (!admininf) {
        return res.sendStatus(401);
    }
    for (let x = 0; x < 1; x++) {
        let result = await link.AdminUserFindById(admininf._id);
        // 检查用户
        if (result.length <= 0) {
            $result.msg = "更新失败,请检查!";
            break;
        }
        let user = result[0];
        // 是否允许登录
        if (!user.allowLogin) {
            $result.msg = "你已被限制登录!";
            break;
        }
        $result.flag = true;
        $result.data.key = endecode.encode(`${user.name}{|}${user.pass}`);
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
        $result.msg = "查询成功!";
    }

    res.json($result);
}]