let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_statswebuserlogon"]),async (req,res) => {
    let $result = req.$result();
    $result.data = await link.StatsWebUserLogon();
    res.json($result)
}]