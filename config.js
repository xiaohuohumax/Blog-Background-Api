const {
    resolve
} = require('path');

module.exports = {
    database: {
        host: 'localhost', // 主机
        user: 'xiaohuohu', // 用户名
        password: '1915970986', // 密码
        database: 'web', // 数据库名称
    },
    localhost: "localhost",
    listening: 8888, // 开启端口
    encodeDecodeKey: '0123456789abcdef', // 加密秘钥
    encodeDecodeiv: '0123456789abcdef', // 加密向量
    websocketListening: 8890, // websocket 开启端口

    svgCaptcha: { // 验证码 设置
        size: 4, // 6个字符
        ignoreChars: '0o1ilLO',
        noise: 0,
        color: true,
        // background: "#9e5a4b",
        fontUrl: resolve("./static/fonts/ZCOOL - Addict Italic/ZCOOL Addict Italic 01.ttf"),
        width:80,
        fontSize: 28,
        height: 28
    },

    webSet: {
        webName: 'XiaoHuoHu', // 名称
        webDescription: '个人博客', // 介绍

        webState: true, // true 开放 false 维修
        opentime: Date.now(), // 维修时间 100 天

        webKeyWords: ["xiaohuohu", "个人博客", "boke"], // 关键字
        webFontFamily: '微软雅黑',
        webTheme: 'color', // 网站主题
        webThemeList: [{
            name: "明亮",
            url: "",
        }, ],
        userDefIcon: [],
        bannerIcon: [],
        copyRight: "",
    }
}