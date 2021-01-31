const express = require('express');

const cookice = require('cookie-parser');

const bodyParser = require('body-parser');

const config = require('./config.js');

const path = require('path');

const app = express();

const link = require('./mongoose/link');

const ip = require('./tools/ip');

const websocketModel = require('./websocket/websocket');

const session = require("express-session");

const {
    toolMulter,
    fileMulter
} = require('./tools/multers');
// console.log = (function (oriLogFunc) {
//     return function () {
//         oriLogFunc.call(console, __filename, ...arguments);
//     }
// })(console.log)


// app.use(bodyParser());
// app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// 使用中间件
app.use(cookice());

// session
app.use(session({
    secret: 'sessiontest', //与cookieParser中的一致
    resave: false,
    name:"seeeionid",
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        secure: true,
        sameSite: 'none',
        maxAge: 60 * 60 * 24 * 1000,
    },
}));


//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Authorization");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");


    console.log(req.session.id)

    // console.log(JSON.stringify(req.cookies) + "|" + req.method + "|" + req.headers.origin + req.path)
    res.cookie("name", 'zhangsan');
    res.cookie("name2", 'zhangsan阿斯顿发');
    res.cookie("name3", 'zhangsa阿斯蒂芬n');
    res.cookie("name4", 'zhangsa阿斯蒂芬n');
    res.cookie("name5", 'zhang阿斯蒂芬san');
    // 注入websocket 实例
    req.websocketModel = websocketModel;
    next();

    // res.header("Content-Type", "application/json;charset=utf-8");
    // res.json(set)
});

// res.json([status|body], [body])  以json的形式返回数据
// res.render(view [, locals] [, callback])  返回对应的view和数据，此方法可以有回调函数，以处理可能出现的异常
// res.send([body|status], [body])  返回自定义的数据，比如json或者404等状态
// res.redirect([status,] path)  这个方法其实不是返回，而是跳转到另外一个url上

// req.originalUrl 获取原始请求的url
// req.params 请求paramsters
// req.path 获取请求路径

// res.status(200); 返回状态码
// setAll
// app.post('/setAll', require('./apiNew/allSetApi'));

// 设置数据库 网站设置初始化
link.webSetFindOnly().then(res => {
    if (!res) {
        console.log("加载配置文件")
        link.webSetInsert(config.webSet).then(() => {
            // link.webSetFindOnly().then(res => console.log(res))
        });
    }
})




// // 错误捕获
// app.use(function (err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

app.post('/testadmin', require('./api/adminUser/adminUserCheck'), (req, res) => {
    res.json(req.body)
});

app.post('/testweb', require('./api/webUser/webUserCheck'), (req, res) => {
    res.json(req.body)
});

// 静态文件
app.use("/", express.static(path.join(__dirname, 'static')));
// 动态静态资源
app.all("/virtualFile/:id", require('./api/virtualFile/staticFile'));


/* ====================================== 后台接口 ====================================== */
// /adminByNameFindIcon
// 通过名字获取头像
app.post('/admin/adminByNameFindIcon', require('./api/adminUser/adminByNameFindIcon'));
// /adminuserlogin
// 后台登录
app.post('/admin/adminuserlogin', require('./api/adminUser/adminUserLogin'));

// 开放检测 未登录则401
app.post('/admin/api/*', require('./api/adminUser/adminUserCheck'));

// /articleinsert 
// 文章
app.post('/admin/api/articleinsert', require('./api/article/articleInsert'));
// /adminUserUpdate
// 用户修改
app.post('/admin/api/adminUserUpdate', require('./api/adminUser/adminUserUpdate'));
// /articleUpdate
// 文章修改
app.post('/admin/api/articleUpdate', require('./api/article/articleUpdate'));
// /articlefind
// 文章全部查询
app.post('/admin/api/articlefind', require('./api/article/aerticleFind'));
// /articleFindByPage
// 文章分页查询
app.post('/admin/api/articleFindByPage', require('./api/article/aerticleFindByPage'));
// /articlefindbyid
// 文章查找 通过id
app.post('/admin/api/articlefindbyid', require('./api/article/aerticleFindbyid'));
// /articleDeleteById
// 文章通过id 删除
app.post('/admin/api/articleDeleteById', require('./api/article/articleDeleteById'));
// /adminUserFindByPage
// 后台用户分页查询
app.post('/admin/api/adminUserFindByPage', require('./api/adminUser/adminUserFindByPage'));
// /adminUserFindbyid
// 通过 id 查询信息 
app.post('/admin/api/adminUserFindbyid', require('./api/adminUser/adminUserFindbyid'));
// /adminuseradd
// 后台注册
app.post('/admin/api/adminuseradd', require('./api/adminUser/adminUserAdd'));
// /videomusicinsert 
// 视频音乐
app.post('/admin/api/videomusicinsert', require('./api/videoMusic/videoMusicInsert'));
// /videomusicfindbyid
// 音乐视频 查找通过 id
app.post('/admin/api/videomusicfindbyid', require('./api/videoMusic/videoMusicFindbyid'));
// /videomusicFindByPage
// 音乐视频 分页查找
app.post('/admin/api/videomusicFindByPage', require('./api/videoMusic/videoMusicFindPage'));
// /videoMusicUpdate
// 音乐视频修改
app.post('/admin/api/videoMusicUpdate', require('./api/videoMusic/videoMusicUpdate'));
// /videoMusicDeleteById
// 通过id 删除
app.post('/admin/api/videoMusicDeleteById', require('./api/videoMusic/videoMusicDeleteById'));
// /imageinsert
// 图包
app.post('/admin/api/imageinsert', require('./api/image/imageInsert'));
// /imageFindPage
// 图包分页查询
app.post('/admin/api/imageFindPage', require('./api/image/imageFindPage'));
// /imageFindbyid
// 图包 id 查询
app.post('/admin/api/imageFindbyid', require('./api/image/imageFindbyid'));
// /imageUpdate
// 图包修改
app.post('/admin/api/imageUpdate', require('./api/image/imageUpdate'));
// /imageDeleteById
// 通过 id 删除图包
app.post('/admin/api/imageDeleteById', require('./api/image/imageDeleteById'));
// /webUserFindByPage
// 前台用户分页查询
app.post('/admin/api/webUserFindByPage', require('./api/webUser/webUserFindByPage'));
// /webUserFindbyid
// 前台用户 id 查询
app.post('/admin/api/webUserFindbyid', require('./api/webUser/webUserFindbyid'));
// /WebUserUpdateById
// 修改用户设置
app.post('/admin/api/WebUserUpdateById', require('./api/webUser/WebUserUpdateById'));
// /adminMessageFindByPage
// 站内留言查询
app.post('/admin/api/adminMessageFindByPage', require('./api/adminMessage/adminMessageFindByPage'));
// /adminMessageInsert
// 站内发送留言
app.post('/admin/api/adminMessageInsert', require('./api/adminMessage/adminMessageInsert'));
// /noticeInsert
// 公告发布
app.post('/admin/api/noticeInsert', require('./api/notice/noticeInsert'));
// /noticeFindByPage
// 公告分页查询 
app.post('/admin/api/noticeFindByPage', require('./api/notice/noticeFindByPage'));
// /noticeDeleteById
// 删除公告
app.post('/admin/api/noticeDeleteById', require('./api/notice/noticeDeleteById'));
// /statsWebUserLevel
// 统计前台等级组成
app.post('/admin/api/statsWebUserLevel', require('./api/stats/statsWebUserLevel'));
// /statsWebUserGender
// 统计前台用户性别组成
app.post('/admin/api/statsWebUserGender', require('./api/stats/statsWebUserGender'));
// /statsWebUserLogon
// 前台用户注册统计
app.post('/admin/api/statsWebUserLogon', require('./api/stats/statsWebUserLogon'));
// /statsAdminUserGender
// 后台用户注册统计
app.post('/admin/api/statsAdminUserGender', require('./api/stats/statsAdminUserGender'));
// /statsAdminUserLevel
// 统计后台用户性别组成
app.post('/admin/api/statsAdminUserLevel', require('./api/stats/statsAdminUserLevel'));




// /commentFindByPageMore
// 获取评论分页
app.post('/admin/api/commentFindByPageMore', require('./api/comment/commentFindByPageMore'));
// /commentGetArticleByIdKind
// 获取评论
app.post('/admin/api/commentGetArticleByIdKind', require('./api/comment/commentGetArticleByIdKind'));
// 获取评论 通过id
app.post('/admin/api/commentFindById', require('./api/comment/commentFindById'));
// /commentDeleteById
// 删除评论
app.post('/admin/api/commentDeleteById', require('./api/comment/commentDeleteById'));
// /toolFindByPage
// 分页查询工具
app.post('/admin/api/toolFindByPage', require('./api/tool/toolFindByPage'));
// /toolFindbyid
// 通过id查找
app.post('/admin/api/toolFindbyid', require('./api/tool/toolFindbyid'));
// /toolDeleteById
// 删除工具
app.post('/admin/api/toolDeleteById', require('./api/tool/toolDeleteById'));
// /uploadTool
// 上传工具
app.post('/admin/api/uploadTool', toolMulter.single("file"), require('./api/tool/toolInsert'));
// /toolUpdate
// 修改工具
app.post('/admin/api/toolUpdate', toolMulter.single("file"), require('./api/tool/toolUpdate'));
// /toolFindKind
// 查询类型
app.post('/admin/api/toolFindKind', require('./api/tool/toolFindKind'));
// /virtualFileInsert
// 文件上传
app.post('/admin/api/virtualFileInsert', fileMulter.single("file"), require('./api/virtualFile/virtualFileInsert'));
// 文件目录显示
// app.post('/admin/api/virtualFileFind', require('./api/virtualFile/virtualFileFind'));
// 文件分页查询
app.post('/admin/api/virtualFileFindByPage', require('./api/virtualFile/virtualFileFindByPage'));
// 删除文件夹/文件
app.post('/admin/api/virtualFileDeleteById', require('./api/virtualFile/virtualFileDeleteById'));
// 新建文件夹
app.post('/admin/api/virtualFileInsertDir', require('./api/virtualFile/virtualFileInsertDir'));
// 修改名字
app.post('/admin/api/virtualFileUpdateName', require('./api/virtualFile/virtualFileUpdateName'));
// 通过名字查询 
// app.post('/admin/api/virtualFileFindByName', require('./api/virtualFile/virtualFileFindByName'));
// 文件移动
app.post('/admin/api/virtualFileRemove', require('./api/virtualFile/virtualFileRemove'));
// 文件复制
app.post('/admin/api/virtualFileCopy', require('./api/virtualFile/virtualFileCopy'));

// /webSetUpdate
// 修改设置
app.post('/admin/api/webSetUpdate', require('./api/webSet/webSetUpdate'));




/* ====================================== /后台接口 ====================================== */

/* ====================================== 前端接口 ====================================== */
// 开放检测
app.post('/user/*', require('./api/webSet/webSetCheck'));
// /user/api/webUserLogin
// 前台登录
app.post('/user/webUserLogin', require('./api/webUser/webUserLogin'));
// /user/api/webUserAdd
// 用户注册
app.post('/user/webUserAdd', require('./api/webUser/webUserAdd'));

// 修改用户设置
app.post('/user/api/WebUserUpdateById', require('./api/webUser/WebUserUpdateById'));
// 文章全部查询
app.post('/user/api/articlefind', require('./api/article/aerticleFind'));
// /user/api/adminUserFindByPage
// 后台用户分页查询
app.post('/user/api/adminUserFindByPage', require('./api/adminUser/adminUserFindByPage'));
// /user/api/articlefindbyid
// 文章查找 通过id
app.post('/user/api/articlefindbyid', require('./api/article/aerticleFindbyid'));
// 文章点赞 通过id
app.post('/user/api/articleNiceById', require('./api/article/articleNiceById'));
// /user/api/articleFindByPage
// 文章分页查询
app.post('/user/api/articleFindByPage', require('./api/article/aerticleFindByPage'));
// /user/api/videomusicFindByPage
// 音乐视频 分页查找
app.post('/user/api/videomusicFindByPage', require('./api/videoMusic/videoMusicFindPage'));
// /user/api/videomusicfindbyid
// 音乐视频 查找通过 id
app.post('/user/api/videomusicfindbyid', require('./api/videoMusic/videoMusicFindbyid'));
// 
// 音乐视频点赞 通过id
app.post('/user/api/videoMusicNiceById', require('./api/videoMusic/videoMusicNiceById'));
// /user/api/imageFindPage
// 图包分页查询
app.post('/user/api/imageFindPage', require('./api/image/imageFindPage'));
// /user/api/imageFindbyid
// 图包 id 查询
app.post('/user/api/imageFindbyid', require('./api/image/imageFindbyid'));
// /user/api/imageNiceById
// 图包点赞 通过id
app.post('/user/api/imageNiceById', require('./api/image/imageNiceById'));
// /user/api/webUserFindbyid
// 前台用户 id 查询
app.post('/user/api/webUserFindbyid', require('./api/webUser/webUserFindbyid'));
// /user/api/noticeFindTop
// 查询最新一条消息
app.post('/user/api/noticeFindTop', require('./api/notice/noticeFindTop'));
// /user/api/noticeFindByPage
// 公告分页查询
app.post('/user/api/noticeFindByPage', require('./api/notice/noticeFindByPage'));
// /user/api/commentInsert
// 前台评论接口
// 发表评论
app.post('/user/api/commentInsert', require('./api/webUser/webUserCheck'), require('./api/comment/commentInsert'));
// /user/api/commentFindByPage
// 获取评论
app.post('/user/api/commentFindByPage', require('./api/comment/commentFindByPage'));
// /user/api/commentRandom
// 随机获取评论
app.post('/user/api/commentRandom', require('./api/comment/commentRandom'));
// 点赞
app.post('/user/api/commentNiceById', require('./api/comment/commentNiceById'));

// /user/api/webUserFindByKey
// 更新用户信息
app.post('/user/api/webUserFindByKey', require('./api/webUser/webUserCheck'), require('./api/webUser/webUserFindByKey'));
// /user/api/danmuInsert
// 添加
app.post('/user/api/danmuInsert', require('./api/danmu/danmuInsert'));
// /user/api/danmuFindRByVId
// 查询弹幕
app.post('/user/api/danmuFindRByVId', require('./api/danmu/danmuFindRandomByVideoId'));
// /user/api/toolFindbyid
// 通过id查找
app.post('/user/api/toolFindbyid', require('./api/tool/toolFindbyid'));
// /user/api/toolFindByPage
// 分页查询工具
app.post('/user/api/toolFindByPage', require('./api/tool/toolFindByPage'));
// /user/api/toolFindKind
// 查询类型
app.post('/user/api/toolFindKind', require('./api/tool/toolFindKind'));

/* ====================================== /前端接口 ====================================== */



/* ====================================== 网站设置 ====================================== */
// /webset/webSetFindOnly
// 网站设置
app.post('/webset/webSetFindOnly', require('./api/webSet/webSetFindOnly'));

/* ====================================== /网站设置 ====================================== */



//配置服务端口
app.listen(config.listening, function () {
    console.log(`api listening at http://${ip}:${config.listening}`);
})