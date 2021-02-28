let mongoose = require('mongoose');
let schemas = require('./schemas');

module.exports = {
    // 文章大纲
    ArticleModel: mongoose.model('article', schemas.ArticleSchema),
    // 后台用户大纲
    AdminUserModel: mongoose.model('adminusers', schemas.AdminUserSchema),
    // 音乐视频大纲
    VideoMusicModel: mongoose.model('videomusics', schemas.VideoMusicSchema),
    // 工具大纲
    ToolModel: mongoose.model('tools', schemas.ToolSchema),
    // 图包分享大纲
    ImageModel: mongoose.model('images', schemas.ImageSchema),
    // 前台用户大纲
    WebUserModel: mongoose.model('webusers', schemas.WebUserSchema),
    // 后台用户留言大纲
    AdminMessageModel: mongoose.model('adminmessages', schemas.AdminMessageSchema),
    // 网站公共大纲
    WebNoticeModel: mongoose.model('webnotices', schemas.WebNoticeSchema),
    // 评论大纲
    CommentModel: mongoose.model('comments', schemas.CommentSchema),
    // 网站设置大纲
    WebSetsModel: mongoose.model('websets', schemas.WebSetsSchema),
    // 弹幕大纲
    DanMuModel: mongoose.model('danmus', schemas.DanMuSchema),
    // 虚拟文件大纲
    VirtualModel: mongoose.model('virtualFiles', schemas.VirtualSchema),
    // 权限部分
    // 角色大纲
    AdminRoleModel: mongoose.model('adminroles', schemas.AdminRoleSchema),
    // 资源大纲
    AdminResourceModel: mongoose.model('adminrseources', schemas.AdminResourceSchema),
    // 歌曲大纲
    SongModel: mongoose.model('songs', schemas.SongSchema),
    // 歌单大纲
    PlayListModel: mongoose.model('playlists', schemas.PlayListSchema),
}