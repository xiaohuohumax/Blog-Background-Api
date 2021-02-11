let schemaModel = require('./schemaModel');
let mongoose = require('mongoose');
let toolsUrl = require('../tools/toolsUrl');
let virtualFileUrl = require('../tools/virtualFileUrl');

let authorityEnum = require('./authorityEnum');

const {
    ObjectID
} = require('mongodb');
module.exports = {
    // 文章添加
    ArticleInsert(params) {
        let pramasChange = {
            ...params,
            adminId: mongoose.Types.ObjectId(params.adminId)
        }
        return new Promise((res, rej) => new schemaModel.ArticleModel(pramasChange).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    
    // 文章查询通过 id
    ArticleFindById(id) {
        return new Promise((res, rej) => schemaModel.ArticleModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 
    ArticleWatchById(id) {
        return new Promise((res, rej) => schemaModel.ArticleModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                watch: 1
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 文章查询通过 分页
    ArticleFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                    title: {
                        $regex: regexp
                    }
                },
                {
                    subTitle: {
                        $regex: regexp
                    }
                },
                {
                    content: {
                        $regex: regexp
                    }
                }
            ],
        };
        return new Promise((res, rej) =>
            schemaModel.ArticleModel.find(sec).countDocuments((err, content) => {
                schemaModel.ArticleModel.find(sec).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        articleSum: content,
                        articles: result
                    });
                })
            }))
    },
    // 通过id 修改文章
    ArticleUpdateById(id, params) {
        return new Promise((res, rej) => schemaModel.ArticleModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    ArticleNiceById(id, inc) {
        return new Promise((res, rej) => schemaModel.ArticleModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                nice: inc
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    ImageNiceById(id, inc) {
        return new Promise((res, rej) => schemaModel.ImageModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                nice: inc
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    VideoMusicNiceById(id, inc) {
        return new Promise((res, rej) => schemaModel.VideoMusicModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                nice: inc
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 文章删除 通过 id
    ArticleDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.ArticleModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    // 后台用户 登录
    AdminUserLogin(name, pass) {
        return new Promise((res, rej) => schemaModel.AdminUserModel.find({
            name,
            pass,
        }, {
            pass: 0
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 通过名字获取头像
    AdminUserByNameFindIcon(name) {
        return new Promise((res, rej) => schemaModel.AdminUserModel.find({
            name
        }, {
            icon: 1
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 后台用户 注册
    AdminUserAdd(params) {
        return new Promise((res, rej) => new schemaModel.AdminUserModel(params).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 后台用户查询通过 分页
    AdminUserFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                    name: {
                        $regex: regexp
                    }
                },
                {
                    signature: {
                        $regex: regexp
                    }
                },
            ],
        };
        return new Promise((res, rej) =>
            schemaModel.AdminUserModel.find(sec).countDocuments((err, content) => {
                schemaModel.AdminUserModel.find(sec).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        adminUserSum: content,
                        adminUsers: result
                    });
                })
            }))
    },
    // 后台用户查询通过 id
    AdminUserFindById(id) {
        return new Promise((res, rej) => schemaModel.AdminUserModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    }, // 后台用户查询通过 name
    AdminUserFindByName(name) {
        return new Promise((res, rej) => schemaModel.AdminUserModel.find({
            name: name
        }, {
            name: 1
        }, (error, result) => {
            error ? rej(false) : res(result.length > 0);
        }))
    },
    // 后台用户更新通过 id
    AdminUserUpdateById(id, params) {
        return new Promise((res, rej) => schemaModel.AdminUserModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 音乐视频 添加
    VideoMusicInsert(params) {
        let pramasChange = {
            ...params,
            adminId: mongoose.Types.ObjectId(params.adminId)
        }
        return new Promise((res, rej) => new schemaModel.VideoMusicModel(pramasChange).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    VideoMusicWatchById(id) {
        return new Promise((res, rej) => schemaModel.VideoMusicModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                watch: 1
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // // 音乐视频查询
    // VideoMusicFind(params) {
    //     return new Promise((res, rej) => schemaModel.VideoMusicModel.find(params, (error, result) => {
    //         error ? rej(error) : res(result);
    //     }))
    // },
    // 文章查询通过 分页
    VideoMusicFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                    title: {
                        $regex: regexp
                    }
                },
                {
                    subTitle: {
                        $regex: regexp
                    }
                }
            ],
        };
        return new Promise((res, rej) =>
            schemaModel.VideoMusicModel.find(sec).countDocuments((err, content) => {
                schemaModel.VideoMusicModel.find(sec).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        videoMusicSum: content,
                        videoMusics: result
                    });
                })
            }))
    },
    // 音乐视频查询通过 id
    VideoMusicFindById(id) {
        return new Promise((res, rej) => schemaModel.VideoMusicModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 通过id 修改音乐视频
    VideoMusicUpdateById(id, params) {
        return new Promise((res, rej) => schemaModel.VideoMusicModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 音视频 删除 通过 id
    VideoMusicDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.VideoMusicModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    // 图包添加
    ImageInsert(params) {
        let pramasChange = {
            ...params,
            adminId: mongoose.Types.ObjectId(params.adminId)
        }
        return new Promise((res, rej) => new schemaModel.ImageModel(pramasChange).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    ImageWatchById(id) {
        return new Promise((res, rej) => schemaModel.ImageModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                watch: 1
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 图包查询通过 分页
    ImageFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                    title: {
                        $regex: regexp
                    }
                },
                {
                    subTitle: {
                        $regex: regexp
                    }
                }
            ],
        };
        return new Promise((res, rej) =>
            schemaModel.ImageModel.find(sec).countDocuments((err, content) => {
                schemaModel.ImageModel.find(sec).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        imageSum: content,
                        images: result
                    });
                })
            }))
    },
    // 图包查询通过 id
    ImageFindById(id) {
        return new Promise((res, rej) => schemaModel.ImageModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 通过id 修改图包
    ImageUpdateById(id, params) {
        return new Promise((res, rej) => schemaModel.ImageModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 图包 删除 通过 id
    ImageDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.ImageModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    // 前台用户 登录
    WebUserLogin(name, pass) {
        return new Promise((res, rej) => schemaModel.WebUserModel.find({
            name,
            pass,
        }, {
            pass: 0
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 后台用户 注册
    WebUserAdd(name, pass) {
        return new Promise((res, rej) => new schemaModel.WebUserModel({
            name,
            pass
        }).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 后台用户查询通过 分页
    WebUserFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                    name: {
                        $regex: regexp
                    }
                },
                {
                    signature: {
                        $regex: regexp
                    }
                },
            ],
        };
        return new Promise((res, rej) =>
            schemaModel.WebUserModel.find(sec).countDocuments((err, content) => {
                schemaModel.WebUserModel.find(sec).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        webUserSum: content,
                        webUsers: result
                    });
                })
            }))
    },
    // 前端用户查询 通过 id
    WebUserFindById(id) {
        return new Promise((res, rej) => schemaModel.WebUserModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, {
            pass: 0
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 前端用户 查询通过 name
    WebUserFindByName(name) {
        return new Promise((res, rej) => schemaModel.WebUserModel.find({
            name: name
        }, {
            name: 1
        }, (error, result) => {
            error ? rej(false) : res(result.length > 0);
        }))
    },
    // 前端用户 更新 通过 id
    WebUserUpdateById(id, params) {
        return new Promise((res, rej) => schemaModel.WebUserModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    WebUserDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.WebUserModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    adminUserDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.AdminUserModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    // 站内留言 分页查询 number number obj{start,end}
    AdminMessageFindByPage(page, pageSteep, select) {
        let sec = [{
                $lookup: {
                    from: "adminusers", //需要连接的表名
                    localField: "adminId", //本表需要关联的字段
                    foreignField: "_id", //被连接表需要关联的字段
                    as: "admin" //查询出的结果集别名
                },
            },

        ];
        if (select.length > 2 && select[0] != "" && select[1] != "") {
            sec.push({
                $match: {
                    uploadTime: {
                        "$gte": new Date(select[0]),
                        "$lte": new Date(select[1])
                    }
                }
            });
        }
        return new Promise((res, rej) =>
            schemaModel.AdminMessageModel.aggregate(sec).exec((err, content) => {
                schemaModel.AdminMessageModel.aggregate(sec).sort({
                    _id: -1
                }).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {

                    error ? rej(error) : res({
                        webMessageSum: content.length,
                        webMessages: result.map(value => {
                            value.admin = value.admin[0];
                            return value;
                        })
                    });
                })
            }))
    },
    // 站内留言添加
    AdminMessageInsert(adminId, message) {
        let pramasChange = {
            message,
            adminId: mongoose.Types.ObjectId(adminId)
        }
        return new Promise((res, rej) => new schemaModel.AdminMessageModel(pramasChange).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 公告添加
    NoticeInsert(params) {
        let pramasChange = {
            ...params,
            adminId: mongoose.Types.ObjectId(params.adminId)
        }
        return new Promise((res, rej) => new schemaModel.WebNoticeModel(pramasChange).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 公共分页查询
    NoticeFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                notice: {
                    $regex: regexp
                }
            }],
        };
        return new Promise((res, rej) =>
            schemaModel.WebNoticeModel.find(sec).countDocuments((err, content) => {
                schemaModel.WebNoticeModel.find(sec).sort({
                    _id: -1
                }).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        noticeSum: content,
                        notices: result
                    });
                })
            }))
    },
    // 查询前 记甜品 公告
    NoticeFindTop() {
        return new Promise((res, rej) =>
            schemaModel.WebNoticeModel.find({}).sort({
                _id: -1
            }).limit(1).exec((error, result) => {
                error ? rej(error) : res({
                    notices: result
                });
            })
        )
    },
    // 公告删除 通过id
    NoticeDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.WebNoticeModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    // 统计
    // 前台用户等级组成
    StatsWebUserLevel() {
        return new Promise((res, rej) => schemaModel.WebUserModel.aggregate([{
            $group: {
                _id: "$level",
                count: {
                    $sum: 1
                }
            },
        }, ]).exec((error, result) => {
            error ? rej(error) : res(result);
        }));
    },
    // 统计 后台用户 等级信息
    StatsAdminUserLevel() {
        return new Promise((res, rej) => schemaModel.AdminUserModel.aggregate([{
            $group: {
                _id: "$level",
                count: {
                    $sum: 1
                }
            },
        }, ]).exec((error, result) => {
            error ? rej(error) : res(result);
        }));
    },
    // 统计用户性别组成
    StatsWebUserGender() {
        return new Promise((res, rej) => schemaModel.WebUserModel.aggregate([{
            $group: {
                _id: "$genger",
                count: {
                    $sum: 1
                }
            },
        }, ]).exec((error, result) => {
            error ? rej(error) : res(result);
        }));
    },
    // 统计用户性别组成
    StatsAdminUserGender() {
        return new Promise((res, rej) => schemaModel.AdminUserModel.aggregate([{
            $group: {
                _id: "$genger",
                count: {
                    $sum: 1
                }
            },
        }, ]).exec((error, result) => {
            error ? rej(error) : res(result);
        }));
    },
    // 统计 前端 用户 注册信息
    StatsWebUserLogon() {
        return new Promise((res, rej) => schemaModel.WebUserModel.aggregate([{
            $group: {
                _id: {
                    "$dateToString": {
                        'format': '%Y-%m-%d',
                        'date': '$logonTime'
                    }
                },
                count: {
                    $sum: 1
                }
            },
        }, ]).exec((error, result) => {
            error ? rej(error) : res(result);
        }));
    },
    // 添加评论
    CommentInsert(params) {
        let pramasChange = {
            ...params,
            userId: mongoose.Types.ObjectId(params.userId),
            articleId: mongoose.Types.ObjectId(params.articleId),
        }
        return new Promise((res, rej) => new schemaModel.CommentModel(pramasChange).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    CommentNiceById(id, inc) {
        return new Promise((res, rej) => schemaModel.CommentModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                nice: inc
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 评论查询
    CommentFindByPage(page, pageSteep, articleId, kind) {
        let sec = [{
                $lookup: {
                    from: "webusers", //需要连接的表名
                    localField: "userId", //本表需要关联的字段
                    foreignField: "_id", //被连接表需要关联的字段
                    as: "user" //查询出的结果集别名
                },
            },
            {
                $match: {
                    articleId: mongoose.Types.ObjectId(articleId),
                    kind
                }
            }
        ];
        return new Promise((res, rej) =>
            schemaModel.CommentModel.aggregate(sec).exec((err, content) => {
                schemaModel.CommentModel.aggregate(sec).sort({
                    _id: -1
                }).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        commentSum: content.length,
                        comments: result.map(value => {
                            value.user = value.user[0];
                            return value;
                        })
                    });
                })
            }))
    },
    CommentFindById(id) {
        return new Promise((res, rej) => schemaModel.CommentModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, {
            pass: 0
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 评论详细查询
    CommentFindByPageMore(page,
        pageSteep,
        kind,
        select,
        selectTime) {
        let regexp = new RegExp(select, 'i');


        let sec = [{
            $lookup: {
                from: "webusers", //需要连接的表名
                localField: "userId", //本表需要关联的字段
                foreignField: "_id", //被连接表需要关联的字段
                as: "user" //查询出的结果集别名
            },
        }, {
            $unwind: "$user"
        }, {
            $match: {
                message: {
                    $regex: regexp
                }
            }
        }];

        if (kind && kind != '') {
            sec.unshift({
                $match: {
                    kind
                }
            });
        }
        if (selectTime && selectTime.length != 0 && selectTime[0] != "" && selectTime[1] != "") {
            sec.push({
                $match: {
                    uploadTime: {
                        "$gte": new Date(selectTime[0]),
                        "$lte": new Date(selectTime[1])
                    }
                }
            });
        }
        return new Promise((res, rej) =>
            schemaModel.CommentModel.aggregate(sec).exec((err, content) => {
                schemaModel.CommentModel.aggregate(sec).sort({
                    _id: -1
                }).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        commentSum: content.length,
                        comments: result
                    });
                })
            }))
    },
    // 删除评论
    commentDeleteByIdKind(kind, articleId) {
        return new Promise((res, rej) =>
            schemaModel.CommentModel.deleteOne({
                kind,
                articleId
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    // 删除评论通过id
    commentDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.CommentModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    // 随机 查询 10条 评论
    commentRandom(sum = 10) {
        let sec = [{
            $lookup: {
                from: "webusers", //需要连接的表名
                localField: "userId", //本表需要关联的字段
                foreignField: "_id", //被连接表需要关联的字段
                as: "user" //查询出的结果集别名
            },
        }, {
            $unwind: "$user"
        }, {
            $sample: {
                size: sum
            }
        }];

        return new Promise((res, rej) =>
            schemaModel.CommentModel.aggregate(sec).sort({
                _id: -1
            }).exec((error, result) => {

                error ? rej(error) : res({
                    comments: result
                });
            })
        )
    },
    // 添加弹幕
    DanMuInsert(params) {
        let pramasChange = {
            ...params,
            userId: mongoose.Types.ObjectId(params.userId)
        }
        return new Promise((res, rej) => new schemaModel.DanMuModel(pramasChange).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 查询弹幕 0-2000
    danmuFindRandomByVideoId(videoId) {
        return new Promise((res, rej) => schemaModel.DanMuModel.find({
            videoId: mongoose.Types.ObjectId(videoId)
        }, {
            content: 1,
            userId: 1,
            color: 1,
            start: 1,
            uploadTime: 1,
        }, ).sort({
            uploadTime: -1
        }).limit(2000).exec((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 设置网站设置
    webSetInsert(params) {
        // 删除网站设置 并添加新的 设置
        return new Promise((res, rej) => schemaModel.WebSetsModel.deleteMany({}, () => {
            new schemaModel.WebSetsModel(params).save((error, result) => {
                error ? rej(error) : res(result);
            })
        }))
    },
    // 获取网站设置
    webSetFindOnly() {
        return new Promise((res, rej) => schemaModel.WebSetsModel.findOne({}).limit(1).exec((error, result) => {
            error ? res({}) : res(result);
        }))
    },
    // 修改网站设置
    webUpdate(params) {
        return new Promise((res, rej) => schemaModel.WebSetsModel.updateOne({
            _id: mongoose.Types.ObjectId(params._id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 添加工具
    ToolInsert(params) {
        let pramasChange = {
            ...params,
            adminId: mongoose.Types.ObjectId(params.adminId)
        }
        // 删除网站设置 并添加新的 设置
        return new Promise((res, rej) => new schemaModel.ToolModel(pramasChange).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    TooleWatchById(id) {
        return new Promise((res, rej) => schemaModel.ToolModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                watch: 1
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 分页查询工具
    ToolFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                    title: {
                        $regex: regexp
                    }
                },
                {
                    subTitle: {
                        $regex: regexp
                    }
                },
                {
                    kind: {
                        $regex: regexp
                    }
                }
            ],
        };
        return new Promise((res, rej) =>
            schemaModel.ToolModel.find(sec).countDocuments((err, content) => {
                schemaModel.ToolModel.find(sec).sort({
                    _id: -1
                }).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        toolSum: content,
                        tools: result.map(val => {
                            val._doc.toolUrl = toolsUrl(`/tools/${val.md5}`)
                            return val;
                        })
                    });
                })
            }))
    },
    // 工具详细查询
    ToolFindById(id) {
        return new Promise((res, rej) => schemaModel.ToolModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, {
            pass: 0
        }, (error, result) => {
            error ? rej(error) : res(result.map(val => {
                val._doc.toolUrl = toolsUrl(`/tools/${val.md5}`)
                return val;
            }));
        }))
    },
    // 删除工具
    ToolDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.ToolModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    // 工具更新通过id
    ToolUpdateById(id, params) {
        return new Promise((res, rej) => schemaModel.ToolModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 工具查看全部类型
    ToolFindKind(select) {
        let regexp = new RegExp(select, 'i');

        let sec = [{
            $match: {
                kind: {
                    $regex: regexp
                }
            }
        }, {
            $group: {
                "_id": "$kind",
            }
        }, ];
        return new Promise((res, rej) =>
            schemaModel.ToolModel.aggregate(sec).sort({
                _id: -1
            }).limit(20).exec((error, result) => {
                error ? rej(error) : res(result.map(val => val._id));
            })
        )
    },
    // 文件添加
    VirtualFileInsert(params) {
        // let pramasChange = {
        //     ...params,
        //     adminId: mongoose.Types.ObjectId(params.adminId)
        // }
        return new Promise((res, rej) => new schemaModel.VirtualModel(params).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 文件列表查询
    VirtualFileFind(params) {
        return new Promise((res, rej) => schemaModel.VirtualModel.find(params, (error, result) => {
            error ? rej(error) : res(result.map(val => {
                val.kind == "file" ? val._doc.virtualUrl = virtualFileUrl(`/${val._id}`) : "";
                return val;
            }));
        }))
    },
    // 文件列表分页
    VirtualFileFindByPage(page, pageSteep, parentId, selectWord) {
        let sec = {
            parentId,
            name: {
                $regex: new RegExp(selectWord, 'i')
            }
        };
        return new Promise((res, rej) =>
            schemaModel.VirtualModel.find(sec).countDocuments((err, content) => {
                schemaModel.VirtualModel.find(sec).sort({
                    uploadTime: -1,
                    kind: 1
                }).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        fileSum: content,
                        files: result.map(val => {
                            val._doc.virtualUrl = virtualFileUrl(`/${val.md5}`)
                            return val;
                        })
                    });
                })
            }))
    },
    // 文件查询 通过id
    VirtualFileFindById(id) {
        return new Promise((res, rej) => schemaModel.VirtualModel.findOne({
            _id: mongoose.Types.ObjectId(id)
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 文件查询 通过id 但结果不包含 id
    VirtualFileFindByIdNotId(id) {
        return new Promise((res, rej) => schemaModel.VirtualModel.findOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            _id: 0
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 文件夹下的文件查询
    VirtualFileFindItemById(id) {
        return new Promise((res, rej) => schemaModel.VirtualModel.find({
            parentId: mongoose.Types.ObjectId(id)
        }, (error, result) => {
            error ? rej(error) : res(result.map(val => {
                val.kind == "file" ? val._doc.virtualUrl = virtualFileUrl(`/${val._id}`) : "";
                return val;
            }));
        }))
    },
    // 文件删除 通过 id
    VirtualFileDeleteById(id) {
        return new Promise((res, rej) => schemaModel.VirtualModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 文件更新 通过id
    VirtualFileUpdateById(id, params) {
        return new Promise((res, rej) => schemaModel.VirtualModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 文件查询通过 name 模糊查询
    VirtualFileFindByName(name) {
        // return new Promise((res, rej) => schemaModel.VirtualModel.find(params, (error, result) => {
        //     error ? rej(error) : res(result);
        // }))
        let regexp = new RegExp(name, 'i');

        let sec = {
            $and: [{
                name: {
                    $regex: regexp
                }
            }, {
                kind: {
                    $ne: "dir"
                }
            }]
        };
        return new Promise((res, rej) => schemaModel.VirtualModel.find(sec).sort({
            _id: -1
        }).limit(40).exec((error, result) => {
            error ? rej(error) : res(result.map(val => {
                val.kind == "file" ? val._doc.virtualUrl = virtualFileUrl(`/${val._id
                }`) : "";
                return val;
            }));
        }))
    },
    // 通过角色数组查询对应角色
    RoleFindByIds(ids) {
        let ObjectIds = ids.filter(val => val && val != "").map(val => mongoose.Types.ObjectId(val));

        return new Promise((res, rej) => schemaModel.RoleModel.find({
            _id: {
                $in: ObjectIds
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 添加角色
    RoleInsert(params) {
        return new Promise((res, rej) => new schemaModel.RoleModel(params).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },

    // authorityResourceInsert(params) {
    //     return new Promise((res, rej) => new schemaModel.ResourceModel(params).save((error, result) => {
    //         error ? rej(error) : res(result);
    //     }))
    // },

    // 通过资源数组查询对应资源
    ResourceFindByIds(ids) {
        let ObjectIds = ids.filter(val => val && val != "").map(val => mongoose.Types.ObjectId(val));

        return new Promise((res, rej) => schemaModel.ResourceModel.find({
            _id: {
                $in: ObjectIds
            }
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    ResourceFindById(id) {
        return new Promise((res, rej) => schemaModel.ResourceModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 添加资源
    ResourceInsert(params) {
        return new Promise((res, rej) => new schemaModel.ResourceModel(params).save((error, result) => {
            error ? rej(error) : res(result);
        }))
    },

    // 查询所有角色
    AuthorityFindAllRole() {
        return new Promise((res, rej) => schemaModel.RoleModel.find({}).exec((error, result) => {
            error ? res({}) : res(result);
        }))
    },
    // 角色分页查询
    AuthorityFindRoleByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                    name: {
                        $regex: regexp
                    }
                },
                {
                    code: {
                        $regex: regexp
                    }
                },

            ],
        };
        return new Promise((res, rej) =>
            schemaModel.RoleModel.find(sec).countDocuments((err, content) => {
                schemaModel.RoleModel.find(sec).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        roleSum: content,
                        roles: result
                    });
                })
            }))
    },
    // 角色通过id查询
    AuthorityFindRoleById(id) {
        return new Promise((res, rej) => schemaModel.RoleModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 资源分页查询
    authorityFindRresourceByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                    name: {
                        $regex: regexp
                    }
                },
                {
                    code: {
                        $regex: regexp
                    }
                },
                {
                    kind: {
                        $regex: regexp
                    }
                },
            ],
        };
        return new Promise((res, rej) =>
            schemaModel.ResourceModel.find(sec).countDocuments((err, content) => {
                schemaModel.ResourceModel.find(sec).skip((page - 1) * pageSteep).limit(+pageSteep).exec((error, result) => {
                    error ? rej(error) : res({
                        resourceSum: content,
                        resources: result
                    });
                })
            }))
    },
    // 角色通过id 更新
    AuthorityRoleUpdateById(id, params) {
        return new Promise((res, rej) => schemaModel.RoleModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    AuthorityResourceUpdateById(id, params) {
        return new Promise((res, rej) => schemaModel.ResourceModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 角色授权码查重
    AuthorityRoleFindByCode(code) {
        return new Promise((res, rej) => schemaModel.RoleModel.find({
            code
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    AuthorityResourceFindByCode(code) {
        return new Promise((res, rej) => schemaModel.ResourceModel.find({
            code
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 角色授权码查重不包括自己
    AuthorityRoleFindByCodeNotYourself(code, id) {
        return new Promise((res, rej) => schemaModel.RoleModel.find({
            code,
            _id: {
                $ne: mongoose.Types.ObjectId(id)
            },
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    AuthorityResourceFindByCodeNotYourself(code, id) {
        return new Promise((res, rej) => schemaModel.ResourceModel.find({
            code,
            _id: {
                $ne: mongoose.Types.ObjectId(id)
            },
        }, (error, result) => {
            error ? rej(error) : res(result);
        }))
    },
    // 角色删除通过id
    AuthorityRoleDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.RoleModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    AuthorityResourceDeleteById(id) {
        return new Promise((res, rej) =>
            schemaModel.ResourceModel.deleteOne({
                _id: mongoose.Types.ObjectId(id)
            }, (error) => {
                error ? rej(error) : res({
                    flag: true
                });
            })
        )
    },
    AuthorityFindRootMenu() {
        return new Promise((res, rej) => schemaModel.ResourceModel.find({
            kind: authorityEnum.menu.code,
            // parentId: "-1",
        }, (error, result) => {
            error ? rej(error) : res(result.filter(val=>val.parentId=="-1"));
        }))
    },
}