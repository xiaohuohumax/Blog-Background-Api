module.exports = function (err, req, res, next) {
    let $result = req.$result(false, err.message);
    console.log(`[${req.path}] ${err.message} \n ${err.stack}`);
    res.json($result);
}