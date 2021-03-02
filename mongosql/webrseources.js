/*
 Navicat Premium Data Transfer

 Source Server         : MongoDB
 Source Server Type    : MongoDB
 Source Server Version : 40210
 Source Host           : localhost:27017
 Source Schema         : web

 Target Server Type    : MongoDB
 Target Server Version : 40210
 File Encoding         : 65001

 Date: 02/03/2021 23:28:12
*/


// ----------------------------
// Collection structure for webrseources
// ----------------------------
db.getCollection("webrseources").drop();
db.createCollection("webrseources");

// ----------------------------
// Documents of webrseources
// ----------------------------
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603cd66fb753d358742f2eff"),
    kind: "Menu",
    parentId: "-1",
    index: "1",
    name: "首页",
    code: "menu_home",
    icon: "ios-planet",
    path: "/",
    __v: NumberInt("0")
} ]);
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603cd696b753d358742f2f00"),
    kind: "Menu",
    parentId: "-1",
    index: "2",
    name: "音乐视频",
    code: "menu_video",
    icon: "ios-videocam",
    path: "/video",
    __v: NumberInt("0")
} ]);
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603cd6b3b753d358742f2f01"),
    kind: "Menu",
    parentId: "-1",
    index: "3",
    name: "图包分享",
    code: "menu_image",
    icon: "md-images",
    path: "/image",
    __v: NumberInt("0")
} ]);
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603cd6d0b753d358742f2f02"),
    kind: "Menu",
    parentId: "-1",
    index: "4",
    name: "在线工具",
    code: "menu_tool",
    icon: "md-hammer",
    path: "/tool",
    __v: NumberInt("0")
} ]);
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603cd9e1ad93074a10808461"),
    kind: "Router",
    parentId: "",
    index: "",
    name: "[路由]登录注册",
    code: "router_logins",
    icon: "",
    path: "",
    __v: NumberInt("0")
} ]);
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603cdb6bad93074a10808462"),
    kind: "View",
    parentId: "",
    index: "",
    name: "[视图]右侧工具[放大缩小按钮]",
    code: "view_righttoolssize_button",
    icon: "",
    path: "",
    __v: NumberInt("0")
} ]);
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603cdbe5ad93074a10808463"),
    kind: "View",
    parentId: "",
    index: "",
    name: "[视图]右侧工具[换肤按钮]",
    code: "view_changetheme_button",
    icon: "",
    path: "",
    __v: NumberInt("0")
} ]);
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603cf33ad516682ff058c190"),
    kind: "View",
    parentId: "",
    index: "",
    name: "[视图]顶部[登录注册按钮]",
    code: "view_top_loginlogon_button",
    icon: "",
    path: "",
    __v: NumberInt("0")
} ]);
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603dada181c09369883a33f6"),
    kind: "View",
    parentId: "",
    index: "",
    name: "[视图]音乐播放器模块",
    code: "view_musicplayer",
    icon: "",
    path: "",
    __v: NumberInt("0")
} ]);
db.getCollection("webrseources").insert([ {
    _id: ObjectId("603dccd881c09369883a33f7"),
    kind: "Menu",
    parentId: "-1",
    index: "5",
    name: "时间轴",
    code: "menu_time",
    icon: "md-timer",
    path: "/time",
    __v: NumberInt("0")
} ]);
