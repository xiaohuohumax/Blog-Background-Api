let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_adminmessageinsert"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.AdminMessageInsert(req.body.params);
    res.json($result);
}]