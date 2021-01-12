let link = require('../../mongoose/link');

module.exports = async (req,res) => {
    let result = await link.VideoMusicFindByPage(req.body.page,req.body.pageSteep,req.body.select);
    res.json(result)
}