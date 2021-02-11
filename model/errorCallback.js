module.exports = function (err, req, res, next) {
    let $result = req.$result(false, err.message);
    console.log(`[${req.path}] ${err.message}`);
    res.json($result);
}