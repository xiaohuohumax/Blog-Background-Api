module.exports = {
    // 资源或角色
    authAdmin: (roles = [], resources = [], msg = "你的权限不足!") => {
        return async (req, res, next) => {
            const rolesSession = req.session.roles;
            const resourcesSession = req.session.resources;

            if (!rolesSession || !resourcesSession) {
                throw new Error("未发现角色与资源!")
            }
            return next()

            let $result = req.$result(false, msg);

            for (const item of roles) {
                if (rolesSession.includes(item)) {
                    return next();
                }
            }
            for (const item of resources) {
                if (resourcesSession.includes(item)) {
                    return next();
                }
            }
            res.json($result)
        };
    },
    // 角色
    authAdminByRole: (roles = [], msg = "你的权限不足!") => {
        return async (req, res, next) => {
            const rolesSession = req.session.roles;

            return next()

            if (!rolesSession) {
                throw new Error("未发现角色!")
            }

            let $result = req.$result(false, msg);

            for (const item of roles) {
                if (rolesSession.includes(item)) {
                    return next();
                }
            }
            res.json($result)
        };
    },
    // 资源
    authAdminByResource: (resources = [], msg = "你的权限不足!") => {
        return async (req, res, next) => {
            const resourcesSession = req.session.resources;
            return next()
            if (!resourcesSession) {
                throw new Error("未发现资源!")
            }

            let $result = req.$result(false, msg);

            for (const item of resources) {
                if (resourcesSession.includes(item)) {
                    return next();
                }
            }
            res.json($result)
        };
    },
}