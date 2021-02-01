let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');

module.exports = async (req, res, next) => {
    // let adminKey = req.headers['authorization'];

    // try {
    //     let [name, pass] = endecode.decode(adminKey).split('{|}');
    //     let result = await link.AdminUserLogin(name, pass);
    //     req.user = result;
    //     if (result) {
    //         return next()
    //     }
    // } catch (error) {}

    // res.sendStatus(401) // 未登录

    const admin = req.session.admininf;

    admin ? next() : res.sendStatus(401); // 未登录
}