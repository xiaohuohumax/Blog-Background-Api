let errorCatch = require('../model/errorCatch');

let api = {
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
    // 文章分页查询
    articleFindByPage: require('./article/articleFindByPage'),
    // 文章查找 通过id
    articleFindById: require('./article/articleFindById'),
    // 文章通过id 删除
    articleDeleteById: require('./article/articleDeleteById'),
    // 通过 id 查询信息 
    adminUserFindbyid: require('./adminUser/adminUserFindbyid'),
    // 后台用户删除账号
    adminUserDeleteById: require('./adminUser/adminUserDeleteById'),
    // 后台注册
    adminUserInsert: require('./adminUser/adminUserInsert'),
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
    virtualFileMove: require('./virtualFile/virtualFileMove'),
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
    // 用户获取信息
    webUserFindBySession: require('./webUser/webUserFindBySession'),
    // 更新用户信息
    WebUserUpdateBySession: require('./webUser/WebUserUpdateBySession'),
    // 删除前端用户
    webUserDeleteById: require('./webUser/webUserDeleteById'),
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
    webSetFindOnly: require('./webSet/webSetFindOnly'),
    // 查询全部角色
    authorityFindAllRole: require('./authority/authorityFindAllRole'),
    // 角色分页
    authorityFindRoleByPage: require('./authority/authorityFindRoleByPage'),
    // 角色通过id查询
    authorityFindRoleById: require('./authority/authorityFindRoleById'),
    // 通过id数组获取资源列表
    authorityFindResourceByIds: require('./authority/authorityFindResourceByIds'),
    // 资源分页查询
    authorityFindResourceByPage: require('./authority/authorityFindResourceByPage'),
    // 更新角色通过id
    authorityRoleUpdateById: require('./authority/authorityRoleUpdateById'),
    // 创建角色
    authorityRoleInsert: require('./authority/authorityRoleInsert'),
    // 删除角色
    authorityRoleDeleteById: require('./authority/authorityRoleDeleteById'),
    // 获取资源通过id
    authorityFindResourceById: require('./authority/authorityFindResourceById'),
    // 获取顶级菜单目录包括原来的自己
    authorityFindRootMenu: require('./authority/authorityFindRootMenu'),
    // 创建资源
    authorityResourceInsert: require('./authority/authorityResourceInsert'),
    // 删除资源
    authorityResourceDeleteById: require('./authority/authorityResourceDeleteById'),
    // 更新资源
    authorityResourceUpdateById: require('./authority/authorityResourceUpdateById'),
    // 通过ids 获取资源列表
    authorityFindResourceByPageAndIds: require('./authority/authorityFindResourceByPageAndIds'),
    // 通过ids获取角色信息
    authorityFindRoleByIds: require('./authority/authorityFindRoleByIds'),
    // 歌曲添加
    songInsert: require('./song/songInsert'),
    // 歌曲分页查询
    songFindPage: require('./song/songFindPage'),
    // 通过id获取歌曲
    songFindById: require('./song/songFindById'),
    // 通过id更新歌曲
    songUpdate: require('./song/songUpdate'),
    // 通过id删除歌曲
    songDeleteById: require('./song/songDeleteById'),
    // 通过 id 列表分页查询歌曲
    songFindByPageAndIds: require('./song/songFindByPageAndIds'),

    // 歌单添加
    playListInsert: require('./playList/playListInsert'),
    // 歌单分页查询
    playListFindPage: require('./playList/playListFindPage'),
    // 通过id获取歌单
    playListFindById: require('./playList/playListFindById'),
    // 通过id更新歌单
    playListUpdate: require('./playList/playListUpdate'),
    // 通过id删除歌单
    playListDeleteById: require('./playList/playListDeleteById'),
    // 随机获取一个歌单
    playListRandomFindOne: require('./playList/playListRandomFindOne'),
}

// 若为单一函数则转为路由数组,若为数组则不管 ()=>{} ==> [()=>{}]
for (let key in api) {
    let apiItem = api[key];
    api[key] = typeof (apiItem) === 'function' ? [apiItem] : apiItem;
    // 错误拦截
    for (const item in api[key]) {
        api[key][item] = errorCatch(api[key][item])
    }
}

module.exports = api;