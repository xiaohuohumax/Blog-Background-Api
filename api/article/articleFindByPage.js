let link = require('../../mongoose/link');

module.exports = async (req,res) => {
    let $result = req.$result();
    $result.data = await link.ArticleFindByPage(req.body.page,req.body.pageSteep,req.body.select);
    res.json($result)
}