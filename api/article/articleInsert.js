let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_articleinsert"]),async (req, res) => {
    console.log(req.body);
    let $result = req.$result();
    $result.data = await link.ArticleInsert(req.body.params);
    res.json($result)
}]