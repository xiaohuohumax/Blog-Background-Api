let link = require('../../mongoose/link');

let authorizeAdmin = require("../../model/authorizeAdmin");


module.exports = [authorizeAdmin(["user_cod"],["resource_code"]), async (req, res) => {
    let $result = req.$result();
    $result.data = await link.NoticeInsert(req.body);
    res.json($result)
}]