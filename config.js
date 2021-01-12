module.exports = {
    database: {
        host: 'localhost',
        user: 'xiaohuohu',
        password: '1915970986',
        database: 'web',
    },
    localhost:"localhost",
    listening: 8888, // 开启端口
    encodeDecodeKey: '0123456789abcdef', // 加密秘钥
    encodeDecodeiv: '0123456789abcdef', // 加密向量

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
                theme: "light"
            },
            {
                name: "暗系",
                theme: "dark"
            },
            {
                name: "彩色",
                theme: "color"
            },
        ],
        userDefIcon: [],
        bannerIcon: [],
        copyRight: "",
        // ['light', 'dark', 'color']
    }
}