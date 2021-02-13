let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityfindrootmenu"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.AuthorityFindRootMenu();
    res.json($result)
}]