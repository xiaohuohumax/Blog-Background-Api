let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_tooldeletebyid"]),async (req, res) => {
    let $result = req.$result();
    // 删除文章
    $result.data = await link.ToolDeleteById(req.body.id);
    res.json($result)
}]