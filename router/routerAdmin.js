const api = require('../api/api');

const {
    toolMulter,
    fileMulter
} = require('../tools/multers');

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
router.post('/api/uploadTool', toolMulter.single("file"), ...api.toolInsert);
// 修改工具
router.post('/api/toolUpdate', toolMulter.single("file"), ...api.toolUpdate);
// 查询类型
router.post('/api/toolFindKind', ...api.toolFindKind);
// 文件上传
router.post('/api/virtualFileInsert', fileMulter.single("file"), ...api.virtualFileInsert);
// 文件目录显示
// router.post('/api/virtualFileFind', ...api.virtualFileFind);
// 文件分页查询
router.post('/api/virtualFileFindByPage', ...api.virtualFileFindByPage);
// 删除文件夹/文件
router.post('/api/virtualFileDeleteById', ...api.virtualFileDeleteById);
// 新建文件夹
router.post('/api/virtualFileInsertDir', ...api.virtualFileInsertDir);
// 修改名字
router.post('/api/virtualFileUpdateName', ...api.virtualFileUpdateName);
// 通过名字查询 
// router.post('/api/virtualFileFindByName', ...api.virtualFileFindByName);
// 文件移动
router.post('/api/virtualFileMove', ...api.virtualFileMove);
// 文件复制
router.post('/api/virtualFileCopy', ...api.virtualFileCopy);
// 修改设置
router.post('/api/webSetUpdate', ...api.webSetUpdate);
// 查询全部角色
router.post('/api/authorityFindAllRole', ...api.authorityFindAllRole);
// 角色分页
router.post('/api/authorityFindRoleByPage', ...api.authorityFindRoleByPage);
// 角色通过id查询详细
router.post('/api/authorityFindRoleById', ...api.authorityFindRoleById);
// 通过id数组获取资源列表
router.post('/api/authorityFindRresourceByIds', ...api.authorityFindRresourceByIds);
// 资源分页查询
router.post('/api/authorityFindRresourceByPage', ...api.authorityFindRresourceByPage);
// 更新角色通过id
router.post('/api/authorityRoleUpdateById', ...api.authorityRoleUpdateById);
// 创建角色
router.post('/api/authorityRoleInsert', ...api.authorityRoleInsert);
// 删除角色
router.post('/api/authorityRoleDeleteById', ...api.authorityRoleDeleteById);
// 获取资源通过id
router.post('/api/authorityFindRresourceById', ...api.authorityFindRresourceById);
 // 获取顶级菜单目录包括原来的自己
router.post('/api/authorityFindRootMenu', ...api.authorityFindRootMenu);
// 创建资源
router.post('/api/authorityResourceInsert', ...api.authorityResourceInsert);
 // 删除资源
router.post('/api/authorityResourceDeleteById', ...api.authorityResourceDeleteById);
// 更新资源
router.post('/api/authorityResourceUpdateById', ...api.authorityResourceUpdateById);
module.exports = router;