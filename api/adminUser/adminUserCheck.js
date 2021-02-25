module.exports = async (req, res, next) => {
    
    const admin = req.session.admininf;

    admin ? next() : res.sendStatus(401); // 未登录
}