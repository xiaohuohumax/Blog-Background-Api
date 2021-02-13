let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_statswebuserlevel"]),async (req,res) => {
    let $result = req.$result();
    $result.data = await link.StatsWebUserLevel();
    res.json($result)
}]