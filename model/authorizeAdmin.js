module.exports = function (roles = [], resources = [], msg = "你的权限不足!") {
    return async (req, res, next) => {
        const rolesSession = req.session.roles;
        const resourcesSession = req.session.resources;

        if (!rolesSession || !resourcesSession) {
            throw new Error("未发现角色与资源!")
        }

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
}