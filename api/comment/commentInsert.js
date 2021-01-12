let link = require('../../mongoose/link');

module.exports = async (req, res) => {

    let user = req.user.inf;

    let allowTalk = user.allowTalk;
    let result = {
        flag: false,
        message: "你已经被限制发言!"
    }

    if (allowTalk) {
        result.flag = true;
        result.message = "评论发送成功!";
        await link.CommentInsert(req.body);
    }

    res.json(result)
}