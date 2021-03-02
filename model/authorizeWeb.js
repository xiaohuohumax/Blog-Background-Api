function isInArray(resArray = [], res = []) {
    for (const item of res) {
        if (resArray.includes(item)) {
            return true;
        }
    }
    return false
}

// 资源或角色
function authWeb(roles = [], resources = []) {
    return async (req, res, next) => {
        const rolesSession = req.session.$webRoles;
        const resourcesSession = req.session.$webResources;

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
function authWebByRole(roles = []) {
    return async (req, res, next) => {
        const rolesSession = req.session.$webRoles;

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
function authWebByResource(resources = []) {
    return async (req, res, next) => {
        const resourcesSession = req.session.$webResources;

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
function authenWeb(req, roles = [], resources = []) {
    req.session.$webResources = resources;
    req.session.$webRoles = roles;
}

module.exports = {
    authenWeb,
    authWeb,
    authWebByRole,
    authWebByResource
}