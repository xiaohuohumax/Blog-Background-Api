const {
    ObjectID
} = require('mongodb');
let {
    Schema,
    Types
} = require('mongoose');

let authorityEnum = require("./authorityEnum");
let urlSplice = require('../tools/urlSplice');
let urlOriginTransform = require("../tools/urlOriginTransform")

// Schema 配置
const schemaOptions = {
    toObject: {
        getters: true,
    },
    toJSON: {
        getters: true,
        virtuals: true
    }
};

// 解码编码 的getter setter
const getterSetter = {
    // 文字
    textEnDecode: {
        get(params) {
            return urlOriginTransform.urlOriginDecode(params);
        },
        set(params) {
            return urlOriginTransform.urlOriginEncode(params)
        }
    },
    // 数组
    arrayEnDecode: {
        set(array) {
            return array.map(item => urlOriginTransform.urlOriginEncode(item));
        },
        get(array) {
            return array.map(item => urlOriginTransform.urlOriginDecode(item));
        }
    },
    // id 转换
    ObjectIDSetter: {
        set(params) {
            return Types.ObjectId(params)
        }
    }
}

// 文章
const ArticleSchema = new Schema({
    adminId: {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    },
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
    content: {
        type: String,
        ...getterSetter.textEnDecode
    },
    icon: String,
    icon: {
        type: String,
        ...getterSetter.textEnDecode
    },
    tags: Array
}, schemaOptions);
// 后台用户
const AdminUserSchema = new Schema({
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
    icon: {
        type: String,
        ...getterSetter.textEnDecode
    },
    allowLogin: {
        type: Boolean,
        default: true
    },
    allowTalk: {
        type: Boolean,
        default: true
    }
}, schemaOptions);
// 音乐视频
const VideoMusicSchema = new Schema({
    adminId: {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    },
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
    videoMusicUrl: {
        type: String,
        ...getterSetter.textEnDecode
    },
    icon: {
        type: String,
        ...getterSetter.textEnDecode
    },
    tags: Array
}, schemaOptions);
// 工具
const ToolSchema = new Schema({
    adminId: {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    },
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
    icon: {
        type: String,
        ...getterSetter.textEnDecode
    },
    tags: Array,
}, schemaOptions);

ToolSchema.virtual("toolUrl").get(function () {
    return urlSplice(`/tools/${this.md5}`);
})
// 图包分享
const ImageSchema = new Schema({
    adminId:  {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    },
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
    icons: {
        type: Array,
        ...getterSetter.arrayEnDecode
    },
    icon: {
        type: String,
        ...getterSetter.textEnDecode
    },
    tags: Array
}, schemaOptions);

// 前台用户
const WebUserSchema = new Schema({
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
        default: urlOriginTransform.urlOriginEncode(urlSplice("/userIcon.jpg")),
        type: String,
        ...getterSetter.textEnDecode
    },
    allowLogin: {
        type: Boolean,
        default: true
    },
    allowTalk: {
        type: Boolean,
        default: true
    }
}, schemaOptions);

// 后台用户留言
const AdminMessageSchema = new Schema({
    adminId:  {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    },
    message: String,
    uploadTime: {
        type: Date,
        default: new Date()
    }
}, schemaOptions);
// 网站公共
const WebNoticeSchema = new Schema({
    adminId:  {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    },
    notice: String,
    icon: {
        type: String,
        ...getterSetter.textEnDecode
    },
    color: String,
    uploadTime: {
        type: Date,
        default: new Date()
    },
}, schemaOptions);
// 评论
const CommentSchema = new Schema({
    userId:  {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    }, // 用户id
    articleId:  {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    }, // 文章id
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
}, schemaOptions);
// 网站设置
const WebSetsSchema = new Schema({
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
        type: [],
        get(params) {
            for (const item of params) {
                item.url = urlOriginTransform.urlOriginDecode(item.url);
            }
            return params
        },
        set(params) {
            for (const item of params) {
                item.url = urlOriginTransform.urlOriginEncode(item.url);
            }
            return params
        }
    },
    userDefIcon: {
        type: Array,
        default: [],
        ...getterSetter.arrayEnDecode
    },
    bannerIcon: {
        type: Array,
        default: [],
        ...getterSetter.arrayEnDecode
    },
    copyRight: {
        type: String,
        default: ''
    },
}, schemaOptions);

// 弹幕
const DanMuSchema = new Schema({
    userId:  {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    }, // 用户id
    videoId:  {
        type: ObjectID,
        ...getterSetter.ObjectIDSetter
    }, // 视频id
    content: String, // 内容
    start: Number, // 视频时间
    color: String, // 颜色
    uploadTime: {
        type: Date,
        default: new Date()
    },
}, schemaOptions);
// 虚拟文件
const VirtualSchema = new Schema({
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
}, schemaOptions);

VirtualSchema.virtual("virtualUrl").get(function () {
    return urlSplice(`/virtualFile/${this.md5}`);
})
// 权限部分
// 角色
const AdminRoleSchema = new Schema({
    name: String, // 角色名称
    code: String, // 唯一标记
    resources: { // 拥有的资源
        type: Array,
        default: []
    },
}, schemaOptions);
// 资源
const AdminResourceSchema = new Schema({
    name: String, // 资源名称
    index: String, // 菜单顺序
    path: String, // 资源对应路径
    icon: String, // 菜单时的图标
    parentId: String, // 父菜单
    code: String, // 唯一标记
    kind: { // 类型 菜单 子目录 其他部分
        type: String,
        default: authorityEnum.api.code // 默认非菜单
    },
}, schemaOptions);
// 歌曲
const SongSchema = new Schema({
    name: String, // 歌曲名称
    icon: {
        type: String,
        ...getterSetter.textEnDecode
    }, // 图标
    subTitle: String, // 说明
    url: {
        type: String,
        ...getterSetter.textEnDecode
    }, // 歌曲地址
    lrc: {
        type: String,
        ...getterSetter.textEnDecode
    }, // 歌词地址
}, schemaOptions);
// 歌单
const PlayListSchema = new Schema({
    title: String, // 标题
    subTitle: String, // 副标题
    icon: {
        type: String,
        ...getterSetter.textEnDecode
    }, // 图标
    songs: { // 拥有的歌曲
        type: Array,
        default: [],
        // ...getterSetter.arrayEnDecode
    },
}, schemaOptions);

// 前端权限部分
// 角色
const WebRoleSchema = new Schema({
    name: String, // 角色名称
    code: String, // 唯一标记
    resources: { // 拥有的资源
        type: Array,
        default: []
    },
}, schemaOptions);
// 资源
const WebResourceSchema = new Schema({
    name: String, // 资源名称
    index: String, // 菜单顺序
    path: String, // 资源对应路径
    icon: String, // 菜单时的图标
    parentId: String, // 父菜单
    code: String, // 唯一标记
    kind: { // 类型 菜单 子目录 其他部分
        type: String,
        default: authorityEnum.api.code // 默认非菜单
    },
}, schemaOptions);

module.exports = {
    // 文章
    ArticleSchema,
    // 后台用户
    AdminUserSchema,
    // 音乐视频
    VideoMusicSchema,
    // 工具
    ToolSchema,
    // 图包分享
    ImageSchema,
    // 前台用户
    WebUserSchema,
    // 后台用户留言
    AdminMessageSchema,
    // 网站公共
    WebNoticeSchema,
    // 评论
    CommentSchema,
    // 网站设置
    WebSetsSchema,
    // 弹幕
    DanMuSchema,
    // 虚拟文件
    VirtualSchema,
    // 歌曲
    SongSchema,
    // 歌单
    PlayListSchema,
    // 后端权限部分
    // 角色
    AdminRoleSchema,
    // 资源
    AdminResourceSchema,
}