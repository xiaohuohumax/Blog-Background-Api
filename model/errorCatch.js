module.exports = (resFunc = () => {}) => {
    return (req, res, next) => {
        // 方法转promise 并错误捕捉
        new Promise(function (resolve) {
            resolve();
        }).then(() => {
            return resFunc(req, res, next)
        }).catch(error => {
            next(error)
        })
    }
}