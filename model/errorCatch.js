const isAsyncFunc = require('../tools/isAsyncFunc');

module.exports = (resFunc = () => {}) => {
    return (req, res, next) => {
        let newFunc = isAsyncFunc(resFunc) ?
            resFunc : new Promise(resFunc);

        newFunc(req, res, next)
            .catch(error => {
                next(error)
            })
    }
}