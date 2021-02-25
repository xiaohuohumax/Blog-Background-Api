let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_resourcefindrootmenu"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.ResourceFindRootMenu();
    res.json($result)
}]