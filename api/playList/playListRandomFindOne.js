let link = require('../../mongoose/link');


module.exports = async (req, res) => {
    let $result = req.$result();
    let playlist = await link.playListRandomFindOne();

    if(playlist.length >0){
        let list = playlist[0];
        list.songInf =   await link.SongFindByIds(list.songs)
        $result.data = list;
    }

    res.json($result)
}