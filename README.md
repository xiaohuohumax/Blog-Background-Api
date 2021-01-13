# 说明

### PS:项目正在开发中,未完成,实时更新!!!!

### 此项目为:`个人博客系统`的三个模块之一

+ [Blog-Main-Web 前端界面模块](https://github.com/xiaohuohumax/Blog-Main-Web)
+ [Blog-Background-Api 后台管理API](https://github.com/xiaohuohumax/Blog-Background-Api)
+ [Blog-Admin-App 后台管理APP(PC端)](https://github.com/xiaohuohumax/Blog-Admin-App)

## `大致功能`

### 前端网站:

1. 正常的博客系统功能 登录注册 浏览博文/图片/视频
2. 在线工具使用 可能包含 小游戏 , 实用小工具
3. 视频弹幕
4. 换肤

### 后台管理:

1. 对博客系统的管理
2. 虚拟文件系统(类似网盘)
2. 权限系统(学习中... 大概不会上)

### 其他

1. 想到了再做.... (*^▽^*)


## `项目技术说明`

1. `Blog-Main-Web 前端界面模块` : nuxt + iview + bootstrap + axios
2. `Blog-Background-Api 后台管理API` : express + mongoBD + mongoose
3. `Blog-Admin-App 后台管理APP(PC端)` : electron + vue + iview + bootstrap + axios + tinymce + echars


## `项目运行`

```
1. 下载依赖

cnpm install

2. 运行项目 注意:三个模块运行命令相同

npm run serve
```

## `项目打包`

自行查看各自项目根目录下 `package.json`. 项目未完成,打包多数会失败,所以不过多赘述,请自行尝试╮(╯▽╰)╭


## `注意点` 

### Blog-Background-Api 项目 需要自己创建数据库

1. 数据库配置请查看`项目根目录`中 `config.js` 的 `database` 属性 自行创建数据库

2. `表`则不用创建,项目运行时会自动创建 表参数详见项目下 `mongoose`下`schemaModel.js`

### Blog-Admin-App 项目 构建打包时国内会报文件下载错误

参考:[electron打包踩过的坑总结](https://segmentfault.com/a/1190000018533945)

## `敬请期待`~~~