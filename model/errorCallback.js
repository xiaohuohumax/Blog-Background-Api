module.exports = function (err, req, res, next) {
    let $result = req.$result(false, "发生意外错误!", err.message);
    res.json($result);
    console.log(`[${req.path}] ${err.message}`);
}