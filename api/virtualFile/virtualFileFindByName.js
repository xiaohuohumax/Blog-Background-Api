let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_virtualfilecopy"]),async (req, res) => {
    let $result = req.$result();
    $result.data = await link.VirtualFileFindByName(req.body.name);
    res.json($result)
}]