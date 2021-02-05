const api = require("../api/api");

const express = require('express');

const router = express.Router();
// websocket
const websocketModel = require('../websocket/websocket');

//设置跨域访问
router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Authorization");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // console.log(req.session.id);
    // console.log(JSON.stringify(req.cookies) + "|" + req.method + "|" + req.headers.origin + req.path)
    // 注入websocket 实例
    req.websocketModel = websocketModel;
    next();
});
// 动态静态资源
router.all("/virtualFile/:id", api.staticFile);
// 网站设置
router.post('/webset/webSetFindOnly', api.webSetFindOnly);

module.exports = router;