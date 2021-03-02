module.exports = function (err, req, res, next) {
    let $result = req.$result(false, err.message);
    next(err);
    res.json($result);
}