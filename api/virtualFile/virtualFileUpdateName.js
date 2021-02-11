let link = require('../../mongoose/link');
let getNoRepeatName = require('./getNoRepeatName');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource([""]),async (req, res) => {
    let $result = req.$result();
    let name = await getNoRepeatName(req.body.name, req.body.parentId, true, req.body.id);
    $result.data = await link.VirtualFileUpdateById(req.body.id, {
        name, // 文件名
    });
    res.json($result);
}]