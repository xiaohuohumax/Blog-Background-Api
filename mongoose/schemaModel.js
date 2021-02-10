const {
    ObjectID
} = require('mongodb');
let mogoose = require('mongoose');
let authorityEnum = require("./authorityEnum");

module.exports = {
    // 文章大纲
    ArticleModel: mogoose.model('article', mogoose.Schema({
        adminId: ObjectID,
        title: String,
        subTitle: String,
        watch: {
            type: Number,
            default: 0
        },
        nice: {
            type: Number,
            default: 0
        },
        love: {
            type: Number,
            default: 0
        },
        uploadTime: {
            type: Date,
            default: new Date()
        },
        content: String,
        icon: String,
        tags: Array
    })),
    // 后台用户大纲
    AdminUserModel: mogoose.model('adminusers', mogoose.Schema({
        name: String,
        pass: String,
        roles: { // 拥有角色
            type: Array,
            default: []
        },
        loginIp: {
            type: String,
            default: "00:00:00:00"
        },
        loginTime: {
            type: Date,
            default: new Date()
        },
        logonTime: {
            type: Date,
            default: new Date()
        },
        level: {
            type: Number,
            default: 6
        },
        genger: String, // 男 女 其他
        signature: {
            type: String,
            default: "这个人懒死了啥也没写!"
        },
        icon: String,
        allowLogin: {
            type: Boolean,
            default: true
        },
        allowTalk: {
            type: Boolean,
            default: true
        }
    })),
    // 音乐视频大纲
    VideoMusicModel: mogoose.model('videomusics', mogoose.Schema({
        adminId: ObjectID,
        title: String,
        subTitle: String,
        watch: {
            type: Number,
            default: 0
        },
        nice: {
            type: Number,
            default: 0
        },
        love: {
            type: Number,
            default: 0
        },
        uploadTime: {
            type: Date,
            default: new Date()
        },
        videoMusicUrl: String,
        icon: String,
        tags: Array
    })),
    // 工具大纲
    ToolModel: mogoose.model('tools', mogoose.Schema({
        adminId: ObjectID,
        title: String,
        subTitle: String,
        md5: String,
        kind: {
            type: String,
            default: "工具"
        },
        watch: {
            type: Number,
            default: 0
        },
        nice: {
            type: Number,
            default: 0
        },
        love: {
            type: Number,
            default: 0
        },
        uploadTime: {
            type: Date,
            default: new Date()
        },
        icon: String,
        tags: Array,
    })),
    // 图包分享大纲
    ImageModel: mogoose.model('images', mogoose.Schema({
        adminId: ObjectID,
        title: String,
        subTitle: String,
        watch: {
            type: Number,
            default: 0
        },
        nice: {
            type: Number,
            default: 0
        },
        love: {
            type: Number,
            default: 0
        },
        uploadTime: {
            type: Date,
            default: new Date()
        },
        icons: Array,
        icon: String,
        tags: Array
    })),
    // 前台用户大纲
    WebUserModel: mogoose.model('webusers', mogoose.Schema({
        name: String,
        pass: String,
        loginIp: {
            type: String,
            default: "00:00:00:00"
        },
        loginTime: {
            type: Date,
            default: new Date()
        },
        logonTime: {
            type: Date,
            default: new Date()
        },
        level: {
            type: Number,
            default: 0
        },
        genger: {
            type: String,
            default: "其他"
        }, // 男 女 其他
        signature: {
            type: String,
            default: "这个人懒死了啥也没写!"
        },
        icon: {
            type: String,
            default: "http://localhost:8888/userIcon.jpg"
        },
        allowLogin: {
            type: Boolean,
            default: true
        },
        allowTalk: {
            type: Boolean,
            default: true
        }
    })),
    // 后台用户留言大纲
    AdminMessageModel: mogoose.model('adminmessages', mogoose.Schema({
        adminId: ObjectID,
        message: String,
        uploadTime: {
            type: Date,
            default: new Date()
        }
    })),
    // 网站公共大纲
    WebNoticeModel: mogoose.model('webnotices', mogoose.Schema({
        adminId: ObjectID,
        notice: String,
        icon: Array,
        color: String,
        uploadTime: {
            type: Date,
            default: new Date()
        },
    })),
    // 评论大纲
    CommentModel: mogoose.model('comments', mogoose.Schema({
        userId: ObjectID, // 用户id
        articleId: ObjectID, // 文章id
        kind: String, // 所属类别 1 文章
        message: String,
        nice: {
            type: Number,
            default: 0
        },
        uploadTime: {
            type: Date,
            default: new Date()
        },
    })),
    // 网站设置大纲
    WebSetsModel: mogoose.model('websets', mogoose.Schema({
        webName: { // 网站名字
            type: String,
            default: 'XiaoHuoHu'
        },
        webDescription: { // 网站说明
            type: String,
            default: '个人博客'
        },
        webState: { // 网站状态
            type: Boolean,
            default: true // true 开放 false 维修
        },
        opentime: { // 维修时间
            type: Date,
            default: new Date()
        },
        webKeyWords: { // 网站关键字
            type: Array,
            default: ["xiaohuohu", "个人博客", "boke"]
        },
        webFontFamily: {
            type: String,
            default: '微软雅黑'
        },
        webTheme: {
            type: String,
            default: ''
        },
        webThemeList: {
            type: Array,
            default: []
        },
        userDefIcon: {
            type: Array,
            default: []
        },
        bannerIcon: {
            type: Array,
            default: []
        },
        copyRight: {
            type: String,
            default: ''
        },
    })),
    // 弹幕大纲
    DanMuModel: mogoose.model('danmus', mogoose.Schema({
        userId: ObjectID, // 用户id
        videoId: ObjectID, // 视频id
        content: String, // 内容
        start: Number, // 视频时间
        color: String, // 颜色
        uploadTime: {
            type: Date,
            default: new Date()
        },
    })),
    // 虚拟文件大纲
    VirtualModel: mogoose.model('virtualFiles', mogoose.Schema({
        adminId: String, // 用户id
        parentId: String, // 父目录
        name: "", // 文件名
        md5: { // 文件保存md5
            type: String,
            default: ""
        },
        size: { // 大小
            type: Number,
            default: 0
        },
        uploadTime: { // 大小
            type: Date,
            default: new Date()
        },
        kind: { // 文件类型
            type: String,
            default: "dir" // dir 文件夹 file 文件
        }
    })),
    // 权限部分
    // 角色大纲
    RoleModel: mogoose.model('roles', mogoose.Schema({
        name: String, // 角色名称
        code: String, // 唯一标记
        resources: { // 拥有的资源
            type: Array,
            default: []
        },
    })),
    // 资源大纲
    ResourceModel: mogoose.model('rseources', mogoose.Schema({
        name: String, // 资源名称
        index: { // 所排顺序
            type: Number,
            default: 0
        },
        path: String, // 资源对应路径
        icon: String, // 菜单时的图标
        parentId: String, // 父菜单
        code: String, // 唯一标记
        kind: { // 类型 菜单 子目录 其他部分
            type: String,
            default: authorityEnum.other // 默认非菜单
        },
    })),
}