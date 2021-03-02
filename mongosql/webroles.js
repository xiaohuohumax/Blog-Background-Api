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

 Date: 02/03/2021 23:28:02
*/


// ----------------------------
// Collection structure for webroles
// ----------------------------
db.getCollection("webroles").drop();
db.createCollection("webroles");

// ----------------------------
// Documents of webroles
// ----------------------------
db.getCollection("webroles").insert([ {
    _id: ObjectId("603c925fae8cf53f9c19865a"),
    resources: [
        "603cd66fb753d358742f2eff",
        "603cd696b753d358742f2f00",
        "603cd6b3b753d358742f2f01",
        "603cd6d0b753d358742f2f02",
        "603cd9e1ad93074a10808461",
        "603cdb6bad93074a10808462",
        "603cdbe5ad93074a10808463",
        "603cf33ad516682ff058c190",
        "603dada181c09369883a33f6",
        "603dccd881c09369883a33f7"
    ],
    name: "游客",
    code: "role_tourist",
    __v: NumberInt("0")
} ]);
db.getCollection("webroles").insert([ {
    _id: ObjectId("603c9572164a3e39200e7298"),
    resources: [
        "603cdb6bad93074a10808462",
        "603cdbe5ad93074a10808463"
    ],
    name: "内测用户",
    code: "role_ore",
    __v: NumberInt("0")
} ]);
