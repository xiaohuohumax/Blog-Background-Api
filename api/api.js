module.exports = {
    // 通过名字获取头像
    adminByNameFindIcon: require('./adminUser/adminByNameFindIcon'),
    // 后台登录
    adminUserLogin: require('./adminUser/adminUserLogin'),
    // 开放检测 未登录则401
    adminUserCheck: require('./adminUser/adminUserCheck'),
    // 文章
    articleInsert: require('./article/articleInsert'),
    // 用户修改
    adminUserUpdate: require('./adminUser/adminUserUpdate'),
    // 文章修改
    articleUpdate: require('./article/articleUpdate'),
    // 文章全部查询
    articleFind: require('./article/articleFind'),
    // 文章分页查询
    articleFindByPage: require('./article/articleFindByPage'),
    // 文章查找 通过id
    articleFindById: require('./article/articleFindById'),
    // 文章通过id 删除
    articleDeleteById: require('./article/articleDeleteById'),
    // 通过 id 查询信息 
    adminUserFindbyid: require('./adminUser/adminUserFindbyid'),
    // 后台注册
    adminUserAdd: require('./adminUser/adminUserAdd'),
    // 视频音乐
    videoMusicInsert: require('./videoMusic/videoMusicInsert'),
    // 音乐视频修改
    videoMusicUpdate: require('./videoMusic/videoMusicUpdate'),
    // 通过id 删除
    videoMusicDeleteById: require('./videoMusic/videoMusicDeleteById'),
    // 图包
    imageInsert: require('./image/imageInsert'),
    // 图包修改
    imageUpdate: require('./image/imageUpdate'),
    // 通过 id 删除图包
    imageDeleteById: require('./image/imageDeleteById'),
    // 前台用户分页查询
    webUserFindByPage: require('./webUser/webUserFindByPage'),
    // 修改用户设置
    WebUserUpdateById: require('./webUser/WebUserUpdateById'),
    // 站内留言查询
    adminMessageFindByPage: require('./adminMessage/adminMessageFindByPage'),
    // 站内发送留言
    adminMessageInsert: require('./adminMessage/adminMessageInsert'),
    // 公告发布
    noticeInsert: require('./notice/noticeInsert'),
    // 公告分页查询 
    noticeFindByPage: require('./notice/noticeFindByPage'),
    // 删除公告
    noticeDeleteById: require('./notice/noticeDeleteById'),
    // 统计前台等级组成
    statsWebUserLevel: require('./stats/statsWebUserLevel'),
    // 统计前台用户性别组成
    statsWebUserGender: require('./stats/statsWebUserGender'),
    // 前台用户注册统计
    statsWebUserLogon: require('./stats/statsWebUserLogon'),
    // 后台用户注册统计
    statsAdminUserGender: require('./stats/statsAdminUserGender'),
    // 统计后台用户性别组成
    statsAdminUserLevel: require('./stats/statsAdminUserLevel'),
    // 获取评论分页
    commentFindByPageMore: require('./comment/commentFindByPageMore'),
    // 获取评论
    commentGetArticleByIdKind: require('./comment/commentGetArticleByIdKind'),
    // 获取评论 通过id
    commentFindById: require('./comment/commentFindById'),
    // 删除评论
    commentDeleteById: require('./comment/commentDeleteById'),
    // 分页查询工具
    toolFindByPage: require('./tool/toolFindByPage'),
    // 通过id查找
    toolFindById: require('./tool/toolFindById'),
    // 删除工具
    toolDeleteById: require('./tool/toolDeleteById'),
    // 上传工具
    toolInsert: require('./tool/toolInsert'),
    // 修改工具
    toolUpdate: require('./tool/toolUpdate'),
    // 查询类型
    toolFindKind: require('./tool/toolFindKind'),
    // 文件上传
    virtualFileInsert: require('./virtualFile/virtualFileInsert'),
    // 文件目录显示
    virtualFileFind: require('./virtualFile/virtualFileFind'),
    // 文件分页查询
    virtualFileFindByPage: require('./virtualFile/virtualFileFindByPage'),
    // 删除文件夹/文件
    virtualFileDeleteById: require('./virtualFile/virtualFileDeleteById'),
    // 新建文件夹
    virtualFileInsertDir: require('./virtualFile/virtualFileInsertDir'),
    // 修改名字
    virtualFileUpdateName: require('./virtualFile/virtualFileUpdateName'),
    // 通过名字查询 
    virtualFileFindByName: require('./virtualFile/virtualFileFindByName'),
    // 文件移动
    virtualFileRemove: require('./virtualFile/virtualFileRemove'),
    // 文件复制
    virtualFileCopy: require('./virtualFile/virtualFileCopy'),
    // 修改设置
    webSetUpdate: require('./webSet/webSetUpdate'),
    // 网站用户检测
    webSetCheck: require('./webSet/webSetCheck'),
    // 前台登录
    webUserLogin: require('./webUser/webUserLogin'),
    // 前台身份验证
    webUserCheck: require('./webUser/webUserCheck'),
    // 用户注册
    webUserAdd: require('./webUser/webUserAdd'),
    // 验证码生成
    createCheckCode: require('./checkCode/createCheckCode'),
    // 后台用户分页查询
    adminUserFindByPage: require('./adminUser/adminUserFindByPage'),
    // 文章点赞 通过id
    articleNiceById: require('./article/articleNiceById'),
    // 音乐视频 分页查找
    videoMusicFindPage: require('./videoMusic/videoMusicFindPage'),
    // 音乐视频 查找通过 id
    videoMusicFindById: require('./videoMusic/videoMusicFindById'),
    // 音乐视频点赞 通过id
    videoMusicNiceById: require('./videoMusic/videoMusicNiceById'),
    // 图包分页查询
    imageFindPage: require('./image/imageFindPage'),
    // 图包 id 查询
    imageFindById: require('./image/imageFindById'),
    // 图包点赞 通过id
    imageNiceById: require('./image/imageNiceById'),
    // 前台用户 id 查询
    webUserFindById: require('./webUser/webUserFindById'),
    // 查询最新一条消息
    noticeFindTop: require('./notice/noticeFindTop'),
    // 发表评论
    commentInsert: require('./comment/commentInsert'),
    // 获取评论
    commentFindByPage: require('./comment/commentFindByPage'),
    // 随机获取评论
    commentRandom: require('./comment/commentRandom'),
    // 点赞
    commentNiceById: require('./comment/commentNiceById'),
    // 更新用户信息
    // webUserFindByKey: require('./webUser/webUserFindByKey'),
    // 添加
    danmuInsert: require('./danmu/danmuInsert'),
    // 查询弹幕
    danmuFindRandomByVideoId: require('./danmu/danmuFindRandomByVideoId'),
    // 静态文件解析
    staticFile: require('./virtualFile/staticFile'),
    // 网站状态查询
    webSetFindOnly: require('./webSet/webSetFindOnly')
}