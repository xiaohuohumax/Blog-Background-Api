let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_statsadminuserlevel"]),async (req,res) => {
    let $result = req.$result();
    $result.data = await link.StatsAdminUserLevel();
    res.json($result)
}]