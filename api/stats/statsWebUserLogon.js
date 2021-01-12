let link = require('../../mongoose/link');

module.exports = async (req,res) => {
    let result = await link.StatsWebUserLogon();
    res.json(result)
}