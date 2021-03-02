const express = require('express');
const cookice = require('cookie-parser');
const bodyParser = require('body-parser');

// log 重写
require("./model/consoleFilter");

const config = require('./config.js');
const link = require('./mongoose/link');
const serverOrigin = require('./tools/serverOrigin');
// 路由
const routerAdmin = require("./router/routerAdmin");
const routerWeb = require("./router/routerWeb");
const routerApp = require("./router/routerApp");
// websocket
const websocket = require('./model/websocket/websocket');
// result
const result = require('./model/result/result');
// session
const session = require('./model/session');
const errorCallback = require("./model/errorCallback");
const staticFileCallback = require("./model/staticFileCallback");

const app = express();

// 设置数据库 网站设置初始化
link.webSetFindOnly().then(res => {
    if (!res) {
        console.log("loading webset ok")
        link.webSetInsert(config.webSet).then((res) => {});
    }
})

// 使用中间件
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));
// cookie
app.use(cookice());
// session
app.use(session);
app.use(websocket);
app.use(result);

// 静态文件接口
app.use("/", staticFileCallback);
// 网站总接口
app.use("/", routerApp);
// 后台管理接口
app.use("/admin", routerAdmin);
// 博客管理接口
app.use("/user", routerWeb);
// 全局错误拦截
app.use(errorCallback);

//配置服务端口
app.listen(config.server.port, () => {
    console.log(`api listening at ${serverOrigin.expressOrigin}`);
})