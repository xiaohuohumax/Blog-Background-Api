let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [authAdminByResource(["api_playlistupdate"]), async (req, res) => {
    let $result = req.$result();

    const findSongsByids = await link.SongFindByIds(req.body.newdata.songs);
    const findSongIds = findSongsByids.map(val => val._id.toString());

    // 去除以及删除的歌曲
    const newdata = {
        ...req.body.newdata,
        songs: findSongIds
    };

    $result.data = await link.PlayListUpdateById(req.body.id, newdata);
    res.json($result)
}]