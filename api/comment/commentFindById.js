let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_commentfindbyid"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.CommentFindById(req.body.id);
    res.json($result)
}]