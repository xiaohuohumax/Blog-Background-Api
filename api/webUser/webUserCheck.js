let link = require('../../mongoose/link');
let endecode = require('../../tools/endecode');

module.exports = async (req, res, next) => {
    let userKey = req.headers['authorization'];
    try {

        let [name, pass] = endecode.decode(userKey).split('{|}');

        console.log(name, pass,userKey)

        let result = await link.WebUserLogin(name, pass);
        console.log(result)

        if(result.length >0){
            req.user = {
                inf: result[0],
                key: userKey
            };    
            return next()
        }
    } catch (error) {
        console.log(error)
    }

    res.json({
        flag: false,
        message: '身份验证失败'
    })
}