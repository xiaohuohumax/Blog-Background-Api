const api = require("../api/api");

const express = require('express');

const router = express.Router();

// 开放检测
router.post('/*', ...api.webSetCheck);
// 前台登录
router.post('/webUserLogin', ...api.webUserLogin);
// 用户注册
router.post('/webUserAdd', ...api.webUserAdd);
// 验证码生成
router.get('/checkCode', ...api.createCheckCode);
// 用户获取信息
router.post('/api/webUserFindBySession', ...api.webUserFindBySession);
// 修改用户设置
router.post('/api/WebUserUpdateBySession', ...api.WebUserUpdateBySession);
// 后台用户分页查询
router.post('/api/adminUserFindByPage', ...api.adminUserFindByPage);
// 文章查找 通过id
router.post('/api/articlefindbyid', ...api.articleFindById);
// 文章点赞 通过id
router.post('/api/articleNiceById', ...api.articleNiceById);
// 文章分页查询
router.post('/api/articleFindByPage', ...api.articleFindByPage);
// 音乐视频 分页查找
router.post('/api/videomusicFindByPage', ...api.videoMusicFindPage);
// 音乐视频 查找通过 id
router.post('/api/videomusicfindbyid', ...api.videoMusicFindById);
// 音乐视频点赞 通过id
router.post('/api/videoMusicNiceById', ...api.videoMusicNiceById);
// 图包分页查询
router.post('/api/imageFindPage', ...api.imageFindPage);
// 图包 id 查询
router.post('/api/imageFindbyid', ...api.imageFindById);
// 图包点赞 通过id
router.post('/api/imageNiceById', ...api.imageNiceById);
// 前台用户 id 查询
router.post('/api/webUserFindbyid', ...api.webUserFindById);
// 查询最新一条消息
router.post('/api/noticeFindTop', ...api.noticeFindTop);
// 公告分页查询
router.post('/api/noticeFindByPage', ...api.noticeFindByPage);
// 发表评论
router.post('/api/commentInsert', ...api.commentInsert);
// 获取评论
router.post('/api/commentFindByPage', ...api.commentFindByPage);
// 随机获取评论
router.post('/api/commentRandom', ...api.commentRandom);
// 点赞
router.post('/api/commentNiceById', ...api.commentNiceById);
// 更新用户信息
// router.post('/api/webUserFindByKey', ...api.webUserFindByKey);
// 添加
router.post('/api/danmuInsert', ...api.danmuInsert);
// 查询弹幕
router.post('/api/danmuFindRByVId', ...api.danmuFindRandomByVideoId);
// 通过id查找
router.post('/api/toolFindbyid', ...api.toolFindById);
// 分页查询工具
router.post('/api/toolFindByPage', ...api.toolFindByPage);
// 查询类型
router.post('/api/toolFindKind', ...api.toolFindKind);
// 随机获取一个歌单
router.post('/api/playListRandomFindOne', ...api.playListRandomFindOne);


module.exports = router;