let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_statswebusergender"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.StatsWebUserGender();
    res.json($result)
}]