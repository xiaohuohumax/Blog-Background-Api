const api = require('../api/api');

const express = require('express');

const router = express.Router();

router.post('/adminByNameFindIcon', ...api.adminByNameFindIcon);
// 后台登录
router.post('/adminuserlogin', ...api.adminUserLogin);
// 开放检测 未登录则401
router.post('/api/*', ...api.adminUserCheck);
// 文章
router.post('/api/articleinsert', ...api.articleInsert);
// 用户修改
router.post('/api/adminUserUpdate', ...api.adminUserUpdate);
// 文章修改
router.post('/api/articleUpdate', ...api.articleUpdate);
// 文章分页查询
router.post('/api/articleFindByPage', ...api.articleFindByPage);
// 文章查找 通过id
router.post('/api/articlefindbyid', ...api.articleFindById);
// 文章通过id 删除
router.post('/api/articleDeleteById', ...api.articleDeleteById);
// 后台用户分页查询
router.post('/api/adminUserFindByPage', ...api.adminUserFindByPage);
// 通过 id 查询信息 
router.post('/api/adminUserFindbyid', ...api.adminUserFindbyid);
// 删除后台用户
router.post('/api/adminUserDeleteById', ...api.adminUserDeleteById);
// 后台注册
router.post('/api/adminUserInsert', ...api.adminUserInsert);
// 视频音乐
router.post('/api/videomusicinsert', ...api.videoMusicInsert);
// 音乐视频 查找通过 id
router.post('/api/videomusicfindbyid', ...api.videoMusicFindById);
// 音乐视频 分页查找
router.post('/api/videomusicFindByPage', ...api.videoMusicFindPage);
// 音乐视频修改
router.post('/api/videoMusicUpdate', ...api.videoMusicUpdate);
// 通过id 删除
router.post('/api/videoMusicDeleteById', ...api.videoMusicDeleteById);
// 图包
router.post('/api/imageinsert', ...api.imageInsert);
// 图包分页查询
router.post('/api/imageFindPage', ...api.imageFindPage);
// 图包 id 查询
router.post('/api/imageFindbyid', ...api.imageFindById);
// 图包修改
router.post('/api/imageUpdate', ...api.imageUpdate);
// 通过 id 删除图包
router.post('/api/imageDeleteById', ...api.imageDeleteById);
// 前台用户分页查询
router.post('/api/webUserFindByPage', ...api.webUserFindByPage);
// 前台用户 id 查询
router.post('/api/webUserFindbyid', ...api.webUserFindById);
// 删除前端用户
router.post('/api/webUserDeleteById', ...api.webUserDeleteById);
// 修改用户设置
router.post('/api/WebUserUpdateById', ...api.WebUserUpdateById);
// 站内留言查询
router.post('/api/adminMessageFindByPage', ...api.adminMessageFindByPage);
// 站内发送留言
router.post('/api/adminMessageInsert', ...api.adminMessageInsert);
// 公告发布
router.post('/api/noticeInsert', ...api.noticeInsert);
// 公告分页查询 
router.post('/api/noticeFindByPage', ...api.noticeFindByPage);
// 删除公告
router.post('/api/noticeDeleteById', ...api.noticeDeleteById);
// 统计前台等级组成
router.post('/api/statsWebUserLevel', ...api.statsWebUserLevel);
// 统计前台用户性别组成
router.post('/api/statsWebUserGender', ...api.statsWebUserGender);
// 前台用户注册统计
router.post('/api/statsWebUserLogon', ...api.statsWebUserLogon);
// 后台用户注册统计
router.post('/api/statsAdminUserGender', ...api.statsAdminUserGender);
// 统计后台用户性别组成
router.post('/api/statsAdminUserLevel', ...api.statsAdminUserLevel);
// 获取评论分页
router.post('/api/commentFindByPageMore', ...api.commentFindByPageMore);
// 获取评论
router.post('/api/commentGetArticleByIdKind', ...api.commentGetArticleByIdKind);
// 获取评论 通过id
router.post('/api/commentFindById', ...api.commentFindById);
// 删除评论
router.post('/api/commentDeleteById', ...api.commentDeleteById);
// 分页查询工具
router.post('/api/toolFindByPage', ...api.toolFindByPage);
// 通过id查找
router.post('/api/toolFindbyid', ...api.toolFindById);
// 删除工具
router.post('/api/toolDeleteById', ...api.toolDeleteById);
// 上传工具
router.post('/api/uploadTool', ...api.toolInsert);
// 修改工具
router.post('/api/toolUpdate', ...api.toolUpdate);
// 查询类型
router.post('/api/toolFindKind', ...api.toolFindKind);
// 文件上传
router.post('/api/virtualFileInsert', ...api.virtualFileInsert);
// 文件分页查询
router.post('/api/virtualFileFindByPage', ...api.virtualFileFindByPage);
// 删除文件夹/文件
router.post('/api/virtualFileDeleteById', ...api.virtualFileDeleteById);
// 新建文件夹
router.post('/api/virtualFileInsertDir', ...api.virtualFileInsertDir);
// 修改名字
router.post('/api/virtualFileUpdateName', ...api.virtualFileUpdateName);
// 文件移动
router.post('/api/virtualFileMove', ...api.virtualFileMove);
// 修改设置
router.post('/api/webSetUpdate', ...api.webSetUpdate);
// 查询全部角色
router.post('/api/roleFindAll', ...api.roleFindAll);
// 角色分页
router.post('/api/roleFindByPage', ...api.roleFindByPage);
// 角色通过id查询详细
router.post('/api/roleFindById', ...api.roleFindById);
// 资源分页查询
router.post('/api/resourceFindByPage', ...api.resourceFindByPage);
// 更新角色通过id
router.post('/api/roleUpdateById', ...api.roleUpdateById);
// 创建角色
router.post('/api/roleInsert', ...api.roleInsert);
// 删除角色
router.post('/api/roleDeleteById', ...api.roleDeleteById);
// 获取资源通过id
router.post('/api/resourceFindById', ...api.resourceFindById);
// 获取顶级菜单目录包括原来的自己
router.post('/api/resourceFindRootMenu', ...api.resourceFindRootMenu);
// 创建资源
router.post('/api/resourceInsert', ...api.resourceInsert);
// 删除资源
router.post('/api/resourceDeleteById', ...api.resourceDeleteById);
// 更新资源
router.post('/api/resourceUpdateById', ...api.resourceUpdateById);
// 通过ids 获取资源列表
router.post('/api/resourceFindByPageAndIds', ...api.resourceFindByPageAndIds);
// 歌曲添加
router.post('/api/songInsert', ...api.songInsert);
// 歌曲分页
router.post('/api/songFindPage', ...api.songFindPage);
// 通过id获取歌曲
router.post('/api/songFindById', ...api.songFindById);
// 通过id更新歌曲
router.post('/api/songUpdate', ...api.songUpdate);
// 通过id删除各区域
router.post('/api/songDeleteById', ...api.songDeleteById);
// 通过 id 列表分页查询歌曲
router.post('/api/songFindByPageAndIds', ...api.songFindByPageAndIds);
// 歌单添加
router.post('/api/playListInsert', ...api.playListInsert);
// 歌单分页查询
router.post('/api/playListFindPage', ...api.playListFindPage);
// 通过id获取歌单
router.post('/api/playListFindById', ...api.playListFindById);
// 通过id更新歌单
router.post('/api/playListUpdate', ...api.playListUpdate);
// 通过id删除歌单
router.post('/api/playListDeleteById', ...api.playListDeleteById);
// 发送通知
router.post('/api/informSendMessage', ...api.informSendMessage);
// 通过会话获取用户信息
router.post('/api/adminUserFindBySession', ...api.adminUserFindBySession);
// 前端
// 角色分页
router.post('/api/webRoleFindByPage', ...api.webRoleFindByPage);
// 角色通过id查询详细
router.post('/api/webRoleFindById', ...api.webRoleFindById);
// 更新角色通过id
router.post('/api/webRoleUpdateById', ...api.webRoleUpdateById);
// 创建角色
router.post('/api/webRoleInsert', ...api.webRoleInsert);
// 删除角色
router.post('/api/webRoleDeleteById', ...api.webRoleDeleteById);
// 查询全部角色
router.post('/api/webRoleFindAll', ...api.webRoleFindAll);
// 通过ids 获取资源列表
router.post('/api/webResourceFindByPageAndIds', ...api.webResourceFindByPageAndIds);
// 资源分页查询
router.post('/api/webResourceFindByPage', ...api.webResourceFindByPage);
// 获取资源通过id
router.post('/api/webResourceFindById', ...api.webResourceFindById);
// 获取顶级菜单目录包括原来的自己
router.post('/api/webResourceFindRootMenu', ...api.webResourceFindRootMenu);
// 创建资源
router.post('/api/webResourceInsert', ...api.webResourceInsert);
// 删除资源
router.post('/api/webResourceDeleteById', ...api.webResourceDeleteById);
// 更新资源
router.post('/api/webResourceUpdateById', ...api.webResourceUpdateById);
// 操控
router.post('/api/baseControl', ...api.baseControl);
// 第三方api
// 天气查询
router.post('/api/weather', ...api.weather);

module.exports = router;