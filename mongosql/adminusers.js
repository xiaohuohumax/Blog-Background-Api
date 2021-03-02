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

 Date: 02/03/2021 23:27:47
*/


// ----------------------------
// Collection structure for adminusers
// ----------------------------
db.getCollection("adminusers").drop();
db.createCollection("adminusers");

// ----------------------------
// Documents of adminusers
// ----------------------------
db.getCollection("adminusers").insert([ {
    _id: ObjectId("5f9674cb4a86e6a06c086f10"),
    logonTime: ISODate("2020-10-26T07:03:32Z"),
    level: NumberInt("4"),
    signature: "侧躺咸鱼~~~",
    name: "admin",
    pass: "123456",
    genger: "男",
    __v: NumberInt("0"),
    loginIp: "127.0.0.1",
    loginTime: ISODate("2021-03-02T15:00:15Z"),
    allowLogin: true,
    allowTalk: true,
    roles: [
        "602342aa6683cf3d849f63c4"
    ],
    _icon: "^$url_origin_key$^/virtualFile/a9bc5d177045d16242f68be0ee78571e.jpg",
    icon: "^$url_origin_key$^/virtualFile/a9bc5d177045d16242f68be0ee78571e.jpg"
} ]);
db.getCollection("adminusers").insert([ {
    _id: ObjectId("602522a80af1ec1344380553"),
    roles: [
        "6024921b6378000020007252",
        "6026391f43383e060c0f433e",
        "603dce4381c09369883a341c"
    ],
    loginIp: "127.0.0.1",
    loginTime: ISODate("2021-03-02T05:56:02Z"),
    logonTime: ISODate("2021-02-11T12:23:33Z"),
    level: NumberInt("4"),
    signature: "侧躺咸鱼",
    allowLogin: true,
    allowTalk: true,
    name: "xiaohuohu",
    pass: "123456",
    genger: "女",
    __v: NumberInt("0"),
    _icon: "^$url_origin_key$^/virtualFile/71c88749de35c0b8e488cece6126aafc.jpg",
    icon: "^$url_origin_key$^/virtualFile/71c88749de35c0b8e488cece6126aafc.jpg"
} ]);
