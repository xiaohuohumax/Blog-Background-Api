let link = require('../../mongoose/link');

module.exports = async (req, res) => {

    const user = req.session.userinf;
    if (!user) {
        return res.sendStatus(401);
    }
    userinf = (await link.WebUserFindAllById(user._id))[0];
    let allowTalk = userinf.allowTalk;

    let $result = req.$result(false, "你已被限制发言!");

    if (allowTalk) {
        $result.flag = true;
        $result.msg = "评论发送成功!";
        await link.CommentInsert(req.body);
    }
    res.json($result)
}