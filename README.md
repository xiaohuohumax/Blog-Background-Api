# 说明

### PS:项目正在开发中,主体功能基本完成,实时更新!!!!

### 此项目为:`个人博客系统`的三个模块之一

+ [Blog-Main-Web 前端界面模块](https://github.com/xiaohuohumax/Blog-Main-Web)
+ [Blog-Background-Api 后台管理API](https://github.com/xiaohuohumax/Blog-Background-Api)
+ [Blog-Admin-App 后台管理APP(PC端)](https://github.com/xiaohuohumax/Blog-Admin-App)

## `大致功能`

### 前端网站:

1. 正常的博客系统功能 登录注册 浏览博文/图片/视频
2. 在线小游戏 , 实用小工具
3. 视频弹幕
4. 换肤
5. 登录注册

### 后台管理:

1. 对博客系统的管理
2. 虚拟文件系统(类似网盘)
2. 权限系统

### 其他

1. 想到了再做.... (*^▽^*)


## 项目技术说明

1. `Blog-Main-Web 前端界面模块` : nuxt + iview + bootstrap + axios
2. `Blog-Background-Api 后台管理API` : express + mongoBD + mongoose
3. `Blog-Admin-App 后台管理APP(PC端)` : electron + vue + iview + bootstrap + axios + tinymce + echars


## 项目运行

1. `下载依赖`

cnpm install

2. `初始化mongodb 数据库`

目录 mongosql 下有全部必须的原始数据,请自行拷贝到数据库执行即可.

3. `修改配置文件 数据库连接配置`

在 config.js 中

3. `执行命令`

npm run serve


## 配置

请自行查看 `config.js` 文件

## 注意点

1. 数据库配置请查看`/config.js` 的 `database` 属性 自行创建数据库

2. `辅助表`则不用创建,项目运行时会自动创建 表参数详见项目下 `mongoose`下`schemaModel.js`


## 配置


请自行查看 `config.js` 文件


## 路由配置方式

1. `在 /api 文件夹中 创建控制器`
    控制器可以对外抛出格式: 任何普通函数都将转换为Promise 函数
        + function
        + async function
        + [ [async] function, ... , async function]
    若抛出的是数组 则为 express 的链式调用(顺序不变)
        例如: app.post(...[func, ... , func])

2. `将控制器注册到 /api/api.js 中`

3. `将 /api/api.js 的控制器绑定到 /routrt 文件中`
    + routerAdmin 后台路由
    + routerApp 网站路由
    + raouterWeb 前端路由


## 权限管理

### 为控制器添加权限

1. `控制器引入 权限节点 /model/authorizeAdmin.js`

    + `authAdmin` 验证角色/资源
    + `authAdminByRole` 验证 角色
    + `authAdminByResource` 验证 资源

2. `控制器 抛出数组, 且将权限节点放置在最前面`

```js
let link = require('../../mongoose/link');

const {
    authAdminByResource
} = require("../../model/authorizeAdmin");
module.exports = [
    // 权限
    authAdminByResource(["api_adminuserdeletebyid"]),
    // 控制器
    async (req, res, next) => {
        // 通用返回结果
        let $result = req.$result();
        // 数据库封装接口
        $result.data = await link.adminUserDeleteById(req.body.id);
        // 返回操作结果
        res.json($result)
    }
]
```

## websocket功能

### 程序运行时自动创建 websocket实例,并绑定在 `req.$websocketModel` 中

### websocket简单使用 ,在控制器中
```js
module.exports = Aasync (req, res) => {
    // 向链接者发送消息 参数 (识别码, 内容)
    req.$websocketModel.sendJsonToAllUser(websocketCode.FLUSH_WEBSET, {
        msg: ""
    })
}
```

### 其他操作 请自行 修改 /model/websocket/websocket.js
