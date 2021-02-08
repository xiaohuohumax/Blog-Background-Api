let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result(false);
    $result.data = await link.WebUserUpdateById(req.body.id, req.body.params);
    res.json($result);
}