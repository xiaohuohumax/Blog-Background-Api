let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_commentfindbypagemore"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.CommentFindByPageMore(
        req.body.page,
        req.body.pageSteep,
        req.body.kind,
        req.body.select,
        req.body.selectTime,
    );
    res.json($result)
}]