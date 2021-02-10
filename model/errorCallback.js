module.exports = function (err, req, res, next) {
    let $result = req.$result(false, "发生意外错误!", err.message);
    console.log(`[${req.path}] ${err.message}`);
    res.json($result);
}