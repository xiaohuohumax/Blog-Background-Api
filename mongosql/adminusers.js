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

 Date: 13/02/2021 14:53:52
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
    level: NumberInt("0"),
    signature: "侧躺咸鱼~~~",
    name: "admin",
    pass: "123456",
    genger: "男",
    icon: "http://localhost:8888/virtualFile/dd46cc016e14d2bbf17c55132528a638.jpg",
    __v: NumberInt("0"),
    loginIp: "127.0.0.1",
    loginTime: ISODate("2021-02-13T06:49:06Z"),
    allowLogin: true,
    allowTalk: true,
    roles: [
        "602342aa6683cf3d849f63c4"
    ]
} ]);
db.getCollection("adminusers").insert([ {
    _id: ObjectId("602522a80af1ec1344380553"),
    roles: [
        "6024921b6378000020007252",
        "6026218443383e060c0f432f",
        "6026344943383e060c0f4335",
        "602634a343383e060c0f4337",
        "602635df43383e060c0f4339",
        "602638c443383e060c0f433b",
        "602638e243383e060c0f433c",
        "602638f643383e060c0f433d",
        "6026391f43383e060c0f433e",
        "6026395043383e060c0f4340"
    ],
    loginIp: "127.0.0.1",
    loginTime: ISODate("2021-02-13T06:46:51Z"),
    logonTime: ISODate("2021-02-11T12:23:33Z"),
    level: NumberInt("4"),
    signature: "null",
    allowLogin: true,
    allowTalk: true,
    name: "xiaohuohu",
    pass: "123456",
    icon: "http://localhost:8888/virtualFile/e08809fd7aede30c03a5dbd3fafce75f.jpg",
    genger: "其他",
    __v: NumberInt("0")
} ]);
