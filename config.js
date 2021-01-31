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
    websocketListening: 8889, // websocket 开启端口

    webSet: {
        webName: 'XiaoHuoHu', // 名称
        webDescription: '个人博客', // 介绍

        webState: true, // true 开放 false 维修
        opentime: Date.now(), // 维修时间 100 天

        webKeyWords: ["xiaohuohu", "个人博客", "boke"], // 关键字
        webFontFamily: '微软雅黑',
        webTheme: 'color', // 网站主题
        webThemeList: [
            {
                name: "明亮",
                url:"",
            },
        ],
        userDefIcon: [],
        bannerIcon: [],
        copyRight: "",
        // ['light', 'dark', 'color']
    }
}