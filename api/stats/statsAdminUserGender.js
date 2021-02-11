let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource([""]),async (req,res) => {
    let $result = req.$result();
    $result.data = await link.StatsAdminUserGender();
    res.json($result)
}]