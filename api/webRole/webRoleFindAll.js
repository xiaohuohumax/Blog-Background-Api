let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_webrolefindall"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.WebRoleFindAll();
    res.json($result)
}] 