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

 Date: 02/03/2021 23:27:29
*/


// ----------------------------
// Collection structure for adminroles
// ----------------------------
db.getCollection("adminroles").drop();
db.createCollection("adminroles");

// ----------------------------
// Documents of adminroles
// ----------------------------
db.getCollection("adminroles").insert([ {
    _id: ObjectId("602342aa6683cf3d849f63c4"),
    resources: [
        "6023d24ccf5700003e002223",
        "6023d31ccf5700003e002224",
        "6023d38bcf5700003e002225",
        "6023d468cf5700003e002226",
        "6023d4bccf5700003e002227",
        "6023d686c720000048007232",
        "6023db71c720000048007233",
        "6023db83c720000048007234",
        "6023dbb7c720000048007235",
        "6023dbf6c720000048007236",
        "6023dc31c720000048007237",
        "6023dd4ec72000004800723b",
        "6023dd77c72000004800723c",
        "6023de25c72000004800723e",
        "6023de3bc72000004800723f",
        "6023de9ec720000048007240",
        "6023deaec720000048007241",
        "6023deedc720000048007242",
        "6023df1dc720000048007243",
        "6023dfc6c720000048007244",
        "6023dfddc720000048007245",
        "6023e029c720000048007246",
        "6023e120c720000048007247",
        "6023e17fc720000048007249",
        "6023e1aac72000004800724a",
        "6025565ae0c73e3e709536c9",
        "602556aa8b901b3914b10c67",
        "602557d8cbfca72d487e1215",
        "6025580acbfca72d487e1216",
        "60255825cbfca72d487e1217",
        "6025585ecbfca72d487e1218",
        "6025588bcbfca72d487e1219",
        "60255a2459c89f09ac574c52",
        "60255a4459c89f09ac574c53",
        "60255a8e59c89f09ac574c54",
        "60255aee59c89f09ac574c55",
        "60255b1259c89f09ac574c56",
        "60255b3959c89f09ac574c57",
        "60255b6f59c89f09ac574c58",
        "60255ba659c89f09ac574c59",
        "60255bce59c89f09ac574c5a",
        "60255bfd59c89f09ac574c5b",
        "60255c2659c89f09ac574c5c",
        "60255c4659c89f09ac574c5d",
        "60255c6859c89f09ac574c5e",
        "60255c8559c89f09ac574c5f",
        "60255cb259c89f09ac574c60",
        "60255ce359c89f09ac574c61",
        "60255d0259c89f09ac574c62",
        "60255d6859c89f09ac574c63",
        "60255ddb59c89f09ac574c64",
        "60255dfe59c89f09ac574c65",
        "60255e1159c89f09ac574c66",
        "60255e2e59c89f09ac574c67",
        "60255e5759c89f09ac574c68",
        "60255e7159c89f09ac574c69",
        "60255e9f59c89f09ac574c6a",
        "60255ebd59c89f09ac574c6b",
        "60255ee659c89f09ac574c6c",
        "60255f0559c89f09ac574c6d",
        "60255f2b59c89f09ac574c6e",
        "60255f4959c89f09ac574c6f",
        "60255f6159c89f09ac574c70",
        "60255f7a59c89f09ac574c71",
        "60255fa159c89f09ac574c72",
        "602560046ecccd18dc480dff",
        "602560236ecccd18dc480e00",
        "6025605b6ecccd18dc480e01",
        "602560876ecccd18dc480e02",
        "602560cf6ecccd18dc480e03",
        "602561096ecccd18dc480e04",
        "6025612b6ecccd18dc480e05",
        "6025614e6ecccd18dc480e06",
        "602561716ecccd18dc480e07",
        "602561ae6ecccd18dc480e08",
        "602562cd6b54601354d30689",
        "602562f56b54601354d3068a",
        "602563176b54601354d3068b",
        "6025ff3c8e22152a48bfc8b3",
        "60260aaa43383e060c0f430a",
        "60260adb43383e060c0f430b",
        "60260b6743383e060c0f430c",
        "60260b8143383e060c0f430d",
        "60260da043383e060c0f430e",
        "60260e0143383e060c0f430f",
        "60260e3043383e060c0f4310",
        "60260e9043383e060c0f4311",
        "60260eaa43383e060c0f4312",
        "60260eca43383e060c0f4313",
        "60260eff43383e060c0f4314",
        "60260f1343383e060c0f4315",
        "60260f6043383e060c0f4316",
        "60260f9a43383e060c0f4317",
        "60260fb943383e060c0f4318",
        "60260fd043383e060c0f4319",
        "6026102443383e060c0f431a",
        "6026103943383e060c0f431b",
        "6026107a43383e060c0f431c",
        "602610d943383e060c0f431d",
        "602610f043383e060c0f431e",
        "6026111043383e060c0f431f",
        "6026113f43383e060c0f4320",
        "602611fa43383e060c0f4321",
        "6026121f43383e060c0f4322",
        "6026123a43383e060c0f4323",
        "6026125e43383e060c0f4324",
        "6026128943383e060c0f4325",
        "602612a943383e060c0f4326",
        "602612c343383e060c0f4327",
        "6026138943383e060c0f4328",
        "602613a343383e060c0f4329",
        "602613b843383e060c0f432a",
        "602613ea43383e060c0f432b",
        "602613fd43383e060c0f432c",
        "6026145a43383e060c0f432d",
        "6026147043383e060c0f432e",
        "6026368743383e060c0f433a",
        "60263a1743383e060c0f4341",
        "60263a6443383e060c0f4342",
        "602642f543383e060c0f4343",
        "6026438c43383e060c0f4344",
        "60268033e573bd2a84a4f74b",
        "60268128e573bd2a84a4f74c",
        "60268c8cf0c5ec23f48b3e19",
        "60268d29f0c5ec23f48b3e1a",
        "60268d91f0c5ec23f48b3e1b",
        "60268da2f0c5ec23f48b3e1c",
        "60268e48f0c5ec23f48b3e1d",
        "60268ed2f0c5ec23f48b3e1e",
        "60268ee9f0c5ec23f48b3e1f",
        "60268f58f0c5ec23f48b3e20",
        "60268fa0f0c5ec23f48b3e21",
        "6026900bf0c5ec23f48b3e22",
        "6026906ff0c5ec23f48b3e23",
        "60269085f0c5ec23f48b3e24",
        "602690def0c5ec23f48b3e25",
        "60269140f0c5ec23f48b3e26",
        "602691e9f0c5ec23f48b3e27",
        "6026924ff0c5ec23f48b3e28",
        "602692b8f0c5ec23f48b3e29",
        "60269350f0c5ec23f48b3e2a",
        "60269398f0c5ec23f48b3e2b",
        "602693f9f0c5ec23f48b3e2c",
        "60269408f0c5ec23f48b3e2d",
        "60269457f0c5ec23f48b3e2e",
        "60269499f0c5ec23f48b3e2f",
        "602694e5f0c5ec23f48b3e30",
        "60269c7f028b1e36d0f06a90",
        "60269d0a028b1e36d0f06a91",
        "60269d35028b1e36d0f06a92",
        "60269dd7028b1e36d0f06a93",
        "60274cd9e7eee320a0cf033a",
        "602753b69921b12934e6a8b7",
        "602761a248c15129f4c920a3",
        "602761c248c15129f4c920a4",
        "602761ed48c15129f4c920a5",
        "6027620748c15129f4c920a6",
        "602775a1f3403f43ecdedafc",
        "602a3022213f3438e024447c",
        "6031d4bb14f58a4924560fa3",
        "6031de62fb9c982d6cb058e1",
        "6031de90fb9c982d6cb058e2",
        "6031debefb9c982d6cb058e3",
        "6031e515f857dc48eca65dc7",
        "6031eafd0e65c90f043b5222",
        "6031ec531957191ba425fa38",
        "6031ee73bdf80c4594ab5dc1",
        "6031ee89bdf80c4594ab5dc2",
        "6031ee9abdf80c4594ab5dc3",
        "6031f6d06c49753cb02e33f5",
        "603200d4dfe4b24c10b547ce",
        "6032012edfe4b24c10b547cf",
        "603201dadfe4b24c10b547d0",
        "60320200dfe4b24c10b547d1",
        "6032022cdfe4b24c10b547d2",
        "60320250dfe4b24c10b547d3",
        "603202e9dfe4b24c10b547d4",
        "603202fddfe4b24c10b547d5",
        "6032030ddfe4b24c10b547d6",
        "6032031ddfe4b24c10b547d7",
        "60320383dfe4b24c10b547d8",
        "603203a3dfe4b24c10b547d9",
        "60320d0c9cfdc14b8ccd0a18",
        "60320d159cfdc14b8ccd0a19",
        "60320d1e9cfdc14b8ccd0a1a",
        "60320d259cfdc14b8ccd0a1b",
        "60320d2d9cfdc14b8ccd0a1c",
        "60320d359cfdc14b8ccd0a1d",
        "60320d3e9cfdc14b8ccd0a1e",
        "60320d489cfdc14b8ccd0a1f",
        "60320d509cfdc14b8ccd0a20",
        "60320d589cfdc14b8ccd0a21",
        "60320d609cfdc14b8ccd0a22",
        "60320d689cfdc14b8ccd0a23",
        "60320d709cfdc14b8ccd0a24",
        "60320d789cfdc14b8ccd0a25",
        "60320d829cfdc14b8ccd0a26",
        "60320d8a9cfdc14b8ccd0a27",
        "60320d929cfdc14b8ccd0a28",
        "60320d9b9cfdc14b8ccd0a29",
        "60320da29cfdc14b8ccd0a2a",
        "60320daa9cfdc14b8ccd0a2b",
        "60320db29cfdc14b8ccd0a2c",
        "60320dc49cfdc14b8ccd0a2d",
        "60320dcc9cfdc14b8ccd0a2e",
        "60320dd49cfdc14b8ccd0a2f",
        "60320ddb9cfdc14b8ccd0a30",
        "60320de29cfdc14b8ccd0a31",
        "60320deb9cfdc14b8ccd0a32",
        "60320df39cfdc14b8ccd0a33",
        "60320dfc9cfdc14b8ccd0a34",
        "60320e049cfdc14b8ccd0a35",
        "60320e0d9cfdc14b8ccd0a36",
        "60320e159cfdc14b8ccd0a37",
        "60320e1d9cfdc14b8ccd0a38",
        "6038aee63bbb6f2cecec9a10",
        "6038afe03bbb6f2cecec9a11",
        "6038b7cdf88f3a52dc568530",
        "60392180f548112f40dc14b6",
        "603c5136aa52fa373c91baa9",
        "603c523caa52fa373c91baaa",
        "603c53abaa52fa373c91baab",
        "603c54d6aa52fa373c91baac",
        "603c557eaa52fa373c91baad",
        "603c5607aa52fa373c91baae",
        "603cf490457c175ec4ac7f3a",
        "603cf4bee364aa5e1027a162",
        "603cf4d5e364aa5e1027a163",
        "603cf4f5e364aa5e1027a164",
        "603cf508e364aa5e1027a165",
        "603cf51be364aa5e1027a166",
        "603cf52ae364aa5e1027a167",
        "603cf576e7e4e65794887286",
        "603cf58ce7e4e65794887287",
        "603cf59fe7e4e65794887288",
        "603cf5b5e7e4e65794887289",
        "603cf5c6e7e4e6579488728a",
        "603cf5d6e7e4e6579488728b",
        "603cf69a87b22b66100002d4",
        "603cf6ed87b22b66100002d5",
        "603cf72e87b22b66100002d6",
        "603cf74587b22b66100002d7",
        "603cf77287b22b66100002d8",
        "603cf78687b22b66100002d9",
        "603cf81487b22b66100002da",
        "603cf82387b22b66100002db",
        "603cf83b87b22b66100002dc",
        "603cf84587b22b66100002dd",
        "603cf99287b22b66100002df",
        "603cf9a587b22b66100002e0",
        "603d0b31b601b219e8a316fa",
        "603d8d6b7df1721cac877fe1",
        "603da183dfd8ad34547287c1",
        "603dd90781c09369883a341d",
        "603dd93481c09369883a341e",
        "603dd95f81c09369883a341f",
        "603dd97981c09369883a3420"
    ],
    name: "超级管理员",
    code: "role_admin",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("6024921b6378000020007252"),
    name: "自我信息修改",
    code: "role_miniadmin",
    resources: [
        "6025580acbfca72d487e1216",
        "6025585ecbfca72d487e1218",
        "60255a8e59c89f09ac574c54",
        "60260aaa43383e060c0f430a",
        "60320d489cfdc14b8ccd0a1f"
    ]
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("6026051043383e060c0f4307"),
    resources: [
        "6023d24ccf5700003e002223",
        "6023d31ccf5700003e002224",
        "6023d38bcf5700003e002225",
        "6023d468cf5700003e002226",
        "6023d4bccf5700003e002227",
        "6023d686c720000048007232",
        "6023db71c720000048007233",
        "6023db83c720000048007234",
        "6023dbb7c720000048007235",
        "6023dbf6c720000048007236",
        "6023dc31c720000048007237",
        "6023dc98c720000048007238",
        "6023dcf6c720000048007239",
        "6023dd1fc72000004800723a",
        "6023dd4ec72000004800723b",
        "6023dd77c72000004800723c",
        "6023dda1c72000004800723d",
        "6023de25c72000004800723e",
        "6023de3bc72000004800723f",
        "6023de9ec720000048007240",
        "6023deaec720000048007241",
        "6023deedc720000048007242",
        "6023df1dc720000048007243",
        "6023dfc6c720000048007244",
        "6023dfddc720000048007245",
        "6023e029c720000048007246",
        "6023e120c720000048007247",
        "6023e17fc720000048007249",
        "6023e1aac72000004800724a",
        "602761a248c15129f4c920a3",
        "602761c248c15129f4c920a4",
        "602761ed48c15129f4c920a5",
        "6027620748c15129f4c920a6",
        "6031d4bb14f58a4924560fa3",
        "6031de62fb9c982d6cb058e1",
        "6031de90fb9c982d6cb058e2",
        "6031debefb9c982d6cb058e3",
        "603200d4dfe4b24c10b547ce",
        "6032012edfe4b24c10b547cf",
        "603201dadfe4b24c10b547d0",
        "60320200dfe4b24c10b547d1",
        "6032022cdfe4b24c10b547d2",
        "60320250dfe4b24c10b547d3",
        "603202e9dfe4b24c10b547d4",
        "603202fddfe4b24c10b547d5",
        "6032030ddfe4b24c10b547d6",
        "6032031ddfe4b24c10b547d7",
        "60320383dfe4b24c10b547d8",
        "603203a3dfe4b24c10b547d9",
        "60320d0c9cfdc14b8ccd0a18",
        "60320d159cfdc14b8ccd0a19",
        "60320d1e9cfdc14b8ccd0a1a",
        "60320d259cfdc14b8ccd0a1b",
        "60320d2d9cfdc14b8ccd0a1c",
        "60320d359cfdc14b8ccd0a1d",
        "60320d3e9cfdc14b8ccd0a1e",
        "60320d489cfdc14b8ccd0a1f",
        "60320d509cfdc14b8ccd0a20",
        "60320d589cfdc14b8ccd0a21",
        "60320d609cfdc14b8ccd0a22",
        "60320d689cfdc14b8ccd0a23",
        "60320d709cfdc14b8ccd0a24",
        "60320d789cfdc14b8ccd0a25",
        "60320d829cfdc14b8ccd0a26",
        "60320d8a9cfdc14b8ccd0a27",
        "60320d929cfdc14b8ccd0a28",
        "60320d9b9cfdc14b8ccd0a29",
        "60320da29cfdc14b8ccd0a2a",
        "60320daa9cfdc14b8ccd0a2b",
        "60320db29cfdc14b8ccd0a2c",
        "60320dc49cfdc14b8ccd0a2d",
        "60320dcc9cfdc14b8ccd0a2e",
        "60320dd49cfdc14b8ccd0a2f",
        "60320ddb9cfdc14b8ccd0a30",
        "60320de29cfdc14b8ccd0a31",
        "60320deb9cfdc14b8ccd0a32",
        "60320df39cfdc14b8ccd0a33",
        "60320dfc9cfdc14b8ccd0a34",
        "60320e049cfdc14b8ccd0a35",
        "60320e0d9cfdc14b8ccd0a36",
        "60320e159cfdc14b8ccd0a37",
        "60320e1d9cfdc14b8ccd0a38"
    ],
    name: "视图测试员",
    code: "role_viewtest",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("6026218443383e060c0f432f"),
    resources: [
        "6023d24ccf5700003e002223",
        "6023d31ccf5700003e002224",
        "6023d38bcf5700003e002225",
        "6025588bcbfca72d487e1219",
        "60255a2459c89f09ac574c52",
        "60255a4459c89f09ac574c53",
        "60260b6743383e060c0f430c",
        "60260b8143383e060c0f430d",
        "60260da043383e060c0f430e",
        "60260e0143383e060c0f430f",
        "60260e3043383e060c0f4310",
        "60268c8cf0c5ec23f48b3e19",
        "60268d91f0c5ec23f48b3e1b",
        "60268da2f0c5ec23f48b3e1c",
        "60320d0c9cfdc14b8ccd0a18",
        "60320d159cfdc14b8ccd0a19",
        "60320d1e9cfdc14b8ccd0a1a"
    ],
    name: "文章管理员",
    code: "role_articlemanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("60262cc143383e060c0f4331"),
    resources: [
        "6023d468cf5700003e002226",
        "6023d4bccf5700003e002227",
        "602563176b54601354d3068b",
        "6026145a43383e060c0f432d",
        "6026147043383e060c0f432e",
        "602694e5f0c5ec23f48b3e30",
        "602775a1f3403f43ecdedafc",
        "602a3022213f3438e024447c",
        "60320d2d9cfdc14b8ccd0a1c",
        "60320d359cfdc14b8ccd0a1d",
        "603c5136aa52fa373c91baa9",
        "603c523caa52fa373c91baaa",
        "603cf490457c175ec4ac7f3a",
        "603cf4bee364aa5e1027a162",
        "603cf4d5e364aa5e1027a163",
        "603cf4f5e364aa5e1027a164",
        "603cf508e364aa5e1027a165",
        "603cf51be364aa5e1027a166",
        "603cf52ae364aa5e1027a167",
        "603cf576e7e4e65794887286",
        "603cf58ce7e4e65794887287",
        "603cf59fe7e4e65794887288",
        "603cf5b5e7e4e65794887289",
        "603cf5c6e7e4e6579488728a",
        "603cf5d6e7e4e6579488728b",
        "603cf69a87b22b66100002d4",
        "603cf6ed87b22b66100002d5",
        "603cf72e87b22b66100002d6",
        "603cf74587b22b66100002d7",
        "603cf77287b22b66100002d8",
        "603cf78687b22b66100002d9",
        "603cf81487b22b66100002da",
        "603cf82387b22b66100002db",
        "603cf83b87b22b66100002dc",
        "603cf84587b22b66100002dd",
        "603cf99287b22b66100002df",
        "603cf9a587b22b66100002e0",
        "603dd90781c09369883a341d",
        "603dd93481c09369883a341e",
        "603dd95f81c09369883a341f",
        "603dd97981c09369883a3420"
    ],
    name: "账号管理员",
    code: "role_webusermanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("60262fe843383e060c0f4332"),
    resources: [
        "6023d686c720000048007232",
        "6023e120c720000048007247",
        "6023e17fc720000048007249",
        "6023e1aac72000004800724a",
        "602557d8cbfca72d487e1215",
        "6025580acbfca72d487e1216",
        "60255825cbfca72d487e1217",
        "6025585ecbfca72d487e1218",
        "60255a8e59c89f09ac574c54",
        "60255aee59c89f09ac574c55",
        "60255b1259c89f09ac574c56",
        "60255b3959c89f09ac574c57",
        "60255b6f59c89f09ac574c58",
        "60255ba659c89f09ac574c59",
        "60255bce59c89f09ac574c5a",
        "60255bfd59c89f09ac574c5b",
        "60255c2659c89f09ac574c5c",
        "60255c4659c89f09ac574c5d",
        "60255c6859c89f09ac574c5e",
        "60255c8559c89f09ac574c5f",
        "60255cb259c89f09ac574c60",
        "60260aaa43383e060c0f430a",
        "60260adb43383e060c0f430b",
        "602610d943383e060c0f431d",
        "602610f043383e060c0f431e",
        "6026111043383e060c0f431f",
        "6026113f43383e060c0f4320",
        "602611fa43383e060c0f4321",
        "6026121f43383e060c0f4322",
        "6026123a43383e060c0f4323",
        "6026125e43383e060c0f4324",
        "602642f543383e060c0f4343",
        "6026438c43383e060c0f4344",
        "60268033e573bd2a84a4f74b",
        "60268128e573bd2a84a4f74c",
        "6026924ff0c5ec23f48b3e28",
        "602692b8f0c5ec23f48b3e29",
        "60269350f0c5ec23f48b3e2a",
        "60269398f0c5ec23f48b3e2b",
        "60269c7f028b1e36d0f06a90",
        "60269d0a028b1e36d0f06a91",
        "60269d35028b1e36d0f06a92",
        "60269dd7028b1e36d0f06a93",
        "60274cd9e7eee320a0cf033a",
        "602753b69921b12934e6a8b7",
        "60320d3e9cfdc14b8ccd0a1e",
        "60320d489cfdc14b8ccd0a1f",
        "60320de29cfdc14b8ccd0a31",
        "60320deb9cfdc14b8ccd0a32",
        "60320df39cfdc14b8ccd0a33",
        "60320dfc9cfdc14b8ccd0a34"
    ],
    name: "权限管理员",
    code: "role_authoritymanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("6026344943383e060c0f4335"),
    resources: [
        "6023db71c720000048007233",
        "6023db83c720000048007234",
        "6025565ae0c73e3e709536c9",
        "602556aa8b901b3914b10c67",
        "60260f6043383e060c0f4316",
        "6026900bf0c5ec23f48b3e22",
        "60320dd49cfdc14b8ccd0a2f"
    ],
    name: "站内信息管理员",
    code: "role_adminmessagemanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("602634a343383e060c0f4337"),
    resources: [
        "6023db71c720000048007233",
        "6023dbb7c720000048007235",
        "60255e5759c89f09ac574c68",
        "60255e7159c89f09ac574c69",
        "6026107a43383e060c0f431c",
        "602691e9f0c5ec23f48b3e27",
        "60320ddb9cfdc14b8ccd0a30"
    ],
    name: "公告管理员",
    code: "role_noticemanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("602635df43383e060c0f4339"),
    resources: [
        "6023db71c720000048007233",
        "6023dbf6c720000048007236",
        "60255ce359c89f09ac574c61",
        "60255d0259c89f09ac574c62",
        "60255d6859c89f09ac574c63",
        "60255ddb59c89f09ac574c64",
        "6026368743383e060c0f433a",
        "60268e48f0c5ec23f48b3e1d",
        "60320d259cfdc14b8ccd0a1b"
    ],
    name: "评论管理员",
    code: "role_commentmanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("602638c443383e060c0f433b"),
    resources: [
        "6023dc31c720000048007237",
        "6023dd4ec72000004800723b",
        "60255fa159c89f09ac574c72",
        "602560046ecccd18dc480dff",
        "602560236ecccd18dc480e00",
        "60260f9a43383e060c0f4317",
        "60260fb943383e060c0f4318",
        "60260fd043383e060c0f4319",
        "6026102443383e060c0f431a",
        "6026103943383e060c0f431b",
        "6026906ff0c5ec23f48b3e23",
        "60269085f0c5ec23f48b3e24",
        "602690def0c5ec23f48b3e25",
        "60269140f0c5ec23f48b3e26",
        "60320d509cfdc14b8ccd0a20",
        "60320d689cfdc14b8ccd0a23",
        "60320d709cfdc14b8ccd0a24",
        "603c53abaa52fa373c91baab"
    ],
    name: "音视频管理员",
    code: "role_musicvideomanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("602638e243383e060c0f433c"),
    resources: [
        "6023dc31c720000048007237",
        "6023dd77c72000004800723c",
        "60255dfe59c89f09ac574c65",
        "60255e1159c89f09ac574c66",
        "60255e2e59c89f09ac574c67",
        "60260e9043383e060c0f4311",
        "60260eaa43383e060c0f4312",
        "60260eca43383e060c0f4313",
        "60260eff43383e060c0f4314",
        "60260f1343383e060c0f4315",
        "60268ed2f0c5ec23f48b3e1e",
        "60268ee9f0c5ec23f48b3e1f",
        "60268f58f0c5ec23f48b3e20",
        "60268fa0f0c5ec23f48b3e21",
        "60320d589cfdc14b8ccd0a21",
        "60320d789cfdc14b8ccd0a25",
        "60320d829cfdc14b8ccd0a26",
        "603c54d6aa52fa373c91baac"
    ],
    name: "图包管理员",
    code: "role_imagemanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("602638f643383e060c0f433d"),
    resources: [
        "6023dc31c720000048007237",
        "6023dd1fc72000004800723a",
        "60255f4959c89f09ac574c6f",
        "60255f6159c89f09ac574c70",
        "60255f7a59c89f09ac574c71",
        "6026138943383e060c0f4328",
        "602613a343383e060c0f4329",
        "602613b843383e060c0f432a",
        "602613ea43383e060c0f432b",
        "602613fd43383e060c0f432c",
        "602693f9f0c5ec23f48b3e2c",
        "60269408f0c5ec23f48b3e2d",
        "60269457f0c5ec23f48b3e2e",
        "60269499f0c5ec23f48b3e2f",
        "60320d609cfdc14b8ccd0a22",
        "60320d8a9cfdc14b8ccd0a27",
        "60320d929cfdc14b8ccd0a28",
        "603c557eaa52fa373c91baad",
        "603c5607aa52fa373c91baae"
    ],
    name: "工具管理员",
    code: "role_toolmanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("6026391f43383e060c0f433e"),
    resources: [
        "6023de25c72000004800723e",
        "6023de3bc72000004800723f",
        "6025605b6ecccd18dc480e01",
        "602560876ecccd18dc480e02",
        "602560cf6ecccd18dc480e03",
        "602561096ecccd18dc480e04",
        "6025612b6ecccd18dc480e05",
        "6025614e6ecccd18dc480e06",
        "602561716ecccd18dc480e07",
        "602561ae6ecccd18dc480e08",
        "602562cd6b54601354d30689",
        "6025ff3c8e22152a48bfc8b3",
        "60263a1743383e060c0f4341",
        "60263a6443383e060c0f4342",
        "60320d9b9cfdc14b8ccd0a29"
    ],
    name: "虚拟文件管理员",
    code: "role_virtualfilemanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("6026393c43383e060c0f433f"),
    resources: [
        "6023de9ec720000048007240",
        "6023deaec720000048007241",
        "6023deedc720000048007242",
        "6023df1dc720000048007243",
        "602562f56b54601354d3068a",
        "6026128943383e060c0f4325",
        "602612a943383e060c0f4326",
        "602612c343383e060c0f4327",
        "60320da29cfdc14b8ccd0a2a",
        "60320daa9cfdc14b8ccd0a2b",
        "60320db29cfdc14b8ccd0a2c"
    ],
    name: "网站设置管理员",
    code: "role_adminsetmanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("6026395043383e060c0f4340"),
    resources: [
        "6023dfc6c720000048007244",
        "6023dfddc720000048007245",
        "6023e029c720000048007246",
        "60255e9f59c89f09ac574c6a",
        "60255ebd59c89f09ac574c6b",
        "60255ee659c89f09ac574c6c",
        "60255f0559c89f09ac574c6d",
        "60255f2b59c89f09ac574c6e",
        "60320dc49cfdc14b8ccd0a2d",
        "60320dcc9cfdc14b8ccd0a2e"
    ],
    name: "统计管理员",
    code: "role_statsmanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("60321479d71fc24028554ea1"),
    resources: [
        "6031de62fb9c982d6cb058e1",
        "6031de90fb9c982d6cb058e2",
        "6031debefb9c982d6cb058e3",
        "6031e515f857dc48eca65dc7",
        "6031eafd0e65c90f043b5222",
        "6031ec531957191ba425fa38",
        "6031ee73bdf80c4594ab5dc1",
        "6031ee89bdf80c4594ab5dc2",
        "6031ee9abdf80c4594ab5dc3",
        "6031f6d06c49753cb02e33f5",
        "603200d4dfe4b24c10b547ce",
        "6032012edfe4b24c10b547cf",
        "603201dadfe4b24c10b547d0",
        "60320200dfe4b24c10b547d1",
        "6032022cdfe4b24c10b547d2",
        "60320250dfe4b24c10b547d3",
        "603202e9dfe4b24c10b547d4",
        "603202fddfe4b24c10b547d5",
        "6032030ddfe4b24c10b547d6",
        "6032031ddfe4b24c10b547d7",
        "60320383dfe4b24c10b547d8",
        "603203a3dfe4b24c10b547d9",
        "60320e049cfdc14b8ccd0a35",
        "60320e0d9cfdc14b8ccd0a36",
        "60320e159cfdc14b8ccd0a37",
        "60320e1d9cfdc14b8ccd0a38"
    ],
    name: "音乐管理员",
    code: "role_musicplayermanager",
    __v: NumberInt("0")
} ]);
db.getCollection("adminroles").insert([ {
    _id: ObjectId("603dce4381c09369883a341c"),
    resources: [
        "6038aee63bbb6f2cecec9a10",
        "6038afe03bbb6f2cecec9a11",
        "6038b7cdf88f3a52dc568530",
        "603d0b31b601b219e8a316fa",
        "603d8d6b7df1721cac877fe1",
        "603da183dfd8ad34547287c1"
    ],
    name: "操控管理员",
    code: "role_controlmanager",
    __v: NumberInt("0")
} ]);
