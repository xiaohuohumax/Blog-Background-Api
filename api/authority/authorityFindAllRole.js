let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_authorityfindallrole"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.AuthorityFindAllRole();
    res.json($result)
}]