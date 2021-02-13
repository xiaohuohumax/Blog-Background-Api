const isAsyncFunc = require('../tools/isAsyncFunc');

module.exports = (resFunc = () => {}) => {
    return (req, res, next) => {
        // 检验resFunc是否为promise 若不是则转为promise
        let newFunc = isAsyncFunc(resFunc) ?
            resFunc : new Promise(resFunc);

        newFunc(req, res, next)
            .catch(error => {
                next(error)
            })
    }
}