const link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");

module.exports = [authAdminByResource(["api_noticeinsert"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.NoticeInsert(req.body);
    res.json($result)
}]