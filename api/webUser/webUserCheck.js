let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');

module.exports = async (req, res, next) => {

    const user = req.session.userinf;

    console.log(JSON.stringify(req.session.userinf))

    user ? next() : res.sendStatus(401); // 未登录

    // let userKey = req.headers['authorization'];

    // try {

    //     let [name, pass] = endecode.decode(userKey).split('{|}');

    //     // console.log(name, pass,userKey)

    //     let result = await link.WebUserLogin(name, pass);
    //     // console.log(result)

    //     if(result.length >0){
    //         req.user = {
    //             inf: result[0],
    //             key: userKey
    //         };    
    //         return next()
    //     }
    // } catch (error) {
    //     console.log(error)
    // }
}