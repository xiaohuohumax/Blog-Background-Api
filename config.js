const {
    resolve
} = require('path');

const amipKey = "0b6b548a429124177495882c5ac579b7";

module.exports = {
    database: { // 数据库
        host: 'localhost', // 主机
        user: 'xiaohuohu', // 用户名
        password: '1915970986', // 密码
        database: 'web', // 数据库名称
    },
    server: { // 服务器设置
        host: "192.168.31.158",
        port: 8888,
    },

    urlOrigin: {
        // 自己的网址保存到数据库是使用 钥匙代替 原来的origin,以达到域名更换资源不失效
        encodeKey: "^$url_origin_key$^", // 替代钥匙
    },

    encode: {
        decodeKey: '0123456789abcdef', // 加密秘钥
        decodeiv: '0123456789abcdef', // 加密向量
    },

    websocket: { // websocket 配置
        port: 8890,
    },

    svgCaptcha: { // 验证码 设置
        size: 4, // 6个字符
        ignoreChars: '0o1ilLO',
        noise: 0,
        color: true,
        // background: "#9e5a4b",
        fontUrl: resolve("./static/fonts/ZCOOL - Addict Italic/ZCOOL Addict Italic 01.ttf"),
        width: 80,
        fontSize: 28,
        height: 28
    },

    webSet: { // 网站设置
        webName: 'XiaoHuoHu', // 名称
        webDescription: '个人博客', // 介绍

        webState: true, // true 开放 false 维修
        opentime: Date.now(), // 维修结束时间

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
    },

    thirdPartyAPI: {

        axois: { // axios 配置
            // 高德天气接口
            weather: (city, extensions = "all") => ({
                method: "get",
                url: 'https://restapi.amap.com/v3/weather/weatherInfo',
                params: {
                    // 开发key
                    key: amipKey,
                    // 城市id
                    city,
                    // 气象类型 all 返回预报天气 base 返回实况天气
                    extensions
                }
            }),
            ip: (ip) => ({
                method: "get",
                url: 'https://restapi.amap.com/v3/ip',
                params: {
                    // 开发key
                    key: amipKey,
                    ip
                }
            })
        }
    }
}