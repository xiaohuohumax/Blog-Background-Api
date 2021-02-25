let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_rolefindall"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.RoleFindAll();
    res.json($result)
}] 