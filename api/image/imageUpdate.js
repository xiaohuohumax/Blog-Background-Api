let link = require('../../mongoose/link');

module.exports = async (req, res) => {
    let $result = req.$result();
    $result.data = await link.ImageUpdateById(req.body.id,req.body.newdata);
    res.json($result)
}