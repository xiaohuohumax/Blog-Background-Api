const express = require('express');
const cookice = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require("express-session");
const path = require('path');

const config = require('./config.js');
const link = require('./mongoose/link');
const ip = require('./tools/ip');
// 路由
const routerAdmin = require("./router/routerAdmin");
const routerWeb = require("./router/routerWeb");
const routerApp = require("./router/routerApp");
// websocket
const websocket = require('./model/websocket/websocket');
// result
const result = require('./model/result/result');

const app = express();

// 设置数据库 网站设置初始化
link.webSetFindOnly().then(res => {
    if (!res) {
        console.log("加载配置文件")
        link.webSetInsert(config.webSet).then((res) => {});
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const secret = "sessiontest";
// 使用中间件
app.use(cookice(secret));

// session
app.use(session({
    secret,
    resave: false,
    name: "seeeionid",
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
    },
}));

app.use(websocket);
app.use(result);

// 静态文件接口
app.use("/", express.static(path.join(__dirname, 'static')));
// 网站总接口
app.use("/", routerApp);
// 后台管理接口
app.use("/admin", routerAdmin);
// 博客管理接口
app.use("/user", routerWeb);
// 全局错误拦截
app.use(function (err, req, res, next) {
    let $result = req.$result(false, "发生意外错误!", err.message);
    res.json($result);
    console.log(`[${req.path}] ${err.message}`);
});

//配置服务端口
app.listen(config.listening, function () {
    console.log(`api listening at http://${ip}:${config.listening}`);
})