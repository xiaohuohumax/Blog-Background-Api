function isInArray(resArray = [], res = []) {
    for (const item of res) {
        if (resArray.includes(item)) {
            return true;
        }
    }
    return false
}

// 资源或角色
function authAdmin(roles = [], resources = []) {
    return async (req, res, next) => {
        const rolesSession = req.session.$roles;
        const resourcesSession = req.session.$resources;

        if (!rolesSession || !resourcesSession) {
            return res.sendStatus(401);
        }

        if (isInArray(rolesSession, roles) || isInArray(resourcesSession, resources)) {
            return next()
        }

        return res.sendStatus(403);
    };
}

// 角色
function authAdminByRole(roles = []) {
    return async (req, res, next) => {
        const rolesSession = req.session.$roles;

        if (!rolesSession) {
            return res.sendStatus(401);
        }

        if (isInArray(rolesSession, roles)) {
            return next()
        }

        return res.sendStatus(403);
    };
}

// 资源
function authAdminByResource(resources = []) {
    return async (req, res, next) => {
        const resourcesSession = req.session.$resources;

        if (!resourcesSession) {
            return res.sendStatus(401);
        }

        if (isInArray(resourcesSession, resources)) {
            return next()
        }

        return res.sendStatus(403);
    };
}

// 认证
function authenAdmin(req, roles = [], resources = []) {
    req.session.$resources = resources;
    req.session.$roles = roles;
}

module.exports = {
    authenAdmin,
    authAdmin,
    authAdminByRole,
    authAdminByResource
}