module.exports = (req, res, next) => {
    req.$result = (flag = true, msg = "执行成功!", data = {}) => ({
        flag, // 标志结果状态 true false
        msg, // 提示信息
        data // 返回内容
    });
    next();
};