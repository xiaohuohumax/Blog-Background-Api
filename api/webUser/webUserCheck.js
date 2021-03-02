module.exports = async (req, res, next) => {
    const user = req.session.userinf;

    user ? next() : res.sendStatus(401); // 未登录
}