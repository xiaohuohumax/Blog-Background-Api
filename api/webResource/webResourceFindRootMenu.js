let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webresourcefindrootmenu"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.WebResourceFindRootMenu();
    res.json($result)
}]