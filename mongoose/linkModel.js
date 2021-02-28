let schemaModel = require('./schemaModel');
let mongoose = require('mongoose');
let authorityEnum = require('./authorityEnum');

module.exports = {
    // 文章添加
    async ArticleInsert(params) {
        return new schemaModel.ArticleModel(params).save()
    },
    // 文章查询通过 id
    async ArticleFindById(id) {
        return schemaModel.ArticleModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },
    async ArticleWatchById(id) {
        return await schemaModel.ArticleModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                watch: 1
            }
        })
    },
    // 文章查询通过 分页
    async ArticleFindByPage(page, pageSteep, select) {
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
        const content = await schemaModel.ArticleModel.find(sec).countDocuments()
        const result = await schemaModel.ArticleModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec();
        return {
            articleSum: content,
            articles: result
        }
    },
    // 通过id 修改文章
    async ArticleUpdateById(id, params) {
        return await schemaModel.ArticleModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        });
    },
    async ArticleNiceById(id, inc) {
        return await schemaModel.ArticleModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                nice: inc
            }
        })
    },
    async ImageNiceById(id, inc) {
        return await schemaModel.ImageModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                nice: inc
            }
        })
    },
    async VideoMusicNiceById(id, inc) {
        return await schemaModel.VideoMusicModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                nice: inc
            }
        })
    },
    // 文章删除 通过 id
    async ArticleDeleteById(id) {
        return await schemaModel.ArticleModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })

    },
    // 后台用户 登录
    async AdminUserLogin(name, pass) {
        return await schemaModel.AdminUserModel.find({
            name,
            pass,
        }, {
            pass: 0
        }).exec()
    },
    // 通过名字获取头像
    async AdminUserByNameFindIcon(name) {
        return await schemaModel.AdminUserModel.findOne({
            name
        }, {
            icon: 1
        }).exec()
    },
    // 后台用户 注册
    async AdminUserAdd(params) {
        return await new schemaModel.AdminUserModel(params).save()
    },
    // 后台用户查询通过 分页
    async AdminUserFindByPage(page, pageSteep, select) {
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
        const content = await schemaModel.AdminUserModel.find(sec).countDocuments()
        const result = await schemaModel.AdminUserModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()

        return {
            adminUserSum: content,
            adminUsers: result
        }
    },
    // 后台用户查询通过 id
    async AdminUserFindById(id) {
        return await schemaModel.AdminUserModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    }, // 后台用户查询通过 name
    async AdminUserFindByName(name) {
        const content = await schemaModel.AdminUserModel.find({
            name: name
        }).countDocuments()
        return content > 0
    },
    // 后台用户更新通过 id
    async AdminUserUpdateById(id, params) {
        return await schemaModel.AdminUserModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    // 音乐视频 添加
    async VideoMusicInsert(params) {
        return await new schemaModel.VideoMusicModel(params).save()
    },
    // 音乐视频浏览数增加
    async VideoMusicWatchById(id) {
        return await schemaModel.VideoMusicModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                watch: 1
            }
        })
    },
    // 文章查询通过 分页
    async VideoMusicFindByPage(page, pageSteep, select) {
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
        const content = await schemaModel.VideoMusicModel.find(sec).countDocuments()
        const result = await schemaModel.VideoMusicModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()

        return {
            videoMusicSum: content,
            videoMusics: result
        }
    },
    // 音乐视频查询通过 id
    async VideoMusicFindById(id) {
        return await schemaModel.VideoMusicModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },
    // 通过id 修改音乐视频
    async VideoMusicUpdateById(id, params) {
        return await schemaModel.VideoMusicModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    // 音视频 删除 通过 id
    async VideoMusicDeleteById(id) {
        return await schemaModel.VideoMusicModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 图包添加
    async ImageInsert(params) {
        return await new schemaModel.ImageModel(params).save()
    },
    // 图包浏览数增加
    async ImageWatchById(id) {
        return await schemaModel.ImageModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                watch: 1
            }
        })
    },
    // 图包查询通过 分页
    async ImageFindByPage(page, pageSteep, select) {
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
        const content = await schemaModel.ImageModel.find(sec).countDocuments()
        const result = await schemaModel.ImageModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()

        return {
            imageSum: content,
            images: result
        }
    },
    // 图包查询通过 id
    async ImageFindById(id) {
        return await schemaModel.ImageModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },
    // 通过id 修改图包
    async ImageUpdateById(id, params) {
        return await schemaModel.ImageModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    // 图包 删除 通过 id
    async ImageDeleteById(id) {
        return await schemaModel.ImageModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 前台用户 登录
    async WebUserLogin(name, pass) {
        return await schemaModel.WebUserModel.find({
            name,
            pass,
        }, {
            pass: 0
        }).exec()
    },
    // 后台用户 注册
    async WebUserAdd(name, pass) {
        return await new schemaModel.WebUserModel({
            name,
            pass
        }).save()
    },
    // 后台用户查询通过 分页
    async WebUserFindByPage(page, pageSteep, select) {
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
        const content = await schemaModel.WebUserModel.find(sec).countDocuments()
        const result = await schemaModel.WebUserModel.find(sec).
        skip((page - 1) * pageSteep).limit(+pageSteep).exec()

        return {
            webUserSum: content,
            webUsers: result
        }
    },
    // 前端用户查询 通过 id
    async WebUserFindById(id) {
        return await schemaModel.WebUserModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, {
            pass: 0
        }).exec()
    },
    // 前端用户查询 通过 id 全部信息
    async WebUserFindAllById(id) {
        return await schemaModel.WebUserModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },
    // 前端用户 查询通过 name
    async WebUserFindByName(name) {
        const content = await schemaModel.WebUserModel.find({
            name: name
        }, {
            name: 1
        }).countDocuments()
        return content > 0
    },
    // 前端用户 更新 通过 id
    async WebUserUpdateById(id, params) {
        return await schemaModel.WebUserModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    // 通过id删除前端用户
    async WebUserDeleteById(id) {
        return await
        schemaModel.WebUserModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 通过id删除管理用户
    async adminUserDeleteById(id) {
        return await
        schemaModel.AdminUserModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 站内留言 分页查询 number number obj{start,end}
    async AdminMessageFindByPage(page, pageSteep, select) {
        let sec = [{
            $match: {
                message: {
                    $regex: new RegExp("", 'i')
                }
            }
        }];
        if (select.length > 2 && select[0] != "" && select[1] != "") {
            sec.push({
                $match: {
                    uploadTime: {
                        "$gte": new Date(select[0]),
                        "$lte": new Date(select[1])
                    }
                }
            })
        }
        const content = await schemaModel.AdminMessageModel.aggregate(sec).exec()
        const result = await schemaModel.AdminMessageModel.aggregate(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()

        for (const item of result) {
            item.admin = await schemaModel.AdminUserModel.findOne({
                _id: mongoose.Types.ObjectId(item.adminId)
            }).exec()
        }

        return {
            webMessageSum: content.length,
            webMessages: result
        }
    },
    // 站内留言添加
    async AdminMessageInsert(params) {
        return await new schemaModel.AdminMessageModel(params).save()
    },
    // 根据管理用户删除站内消息
    async AdminMessageDeleteByUserId(id) {
        return await
        schemaModel.AdminMessageModel.deleteMany({
            adminId: mongoose.Types.ObjectId(id)
        })
    },
    // 公告添加
    async NoticeInsert(params) {
        return await new schemaModel.WebNoticeModel(params).save()
    },
    // 公共分页查询
    async NoticeFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                notice: {
                    $regex: regexp
                }
            }],
        };
        const content = await schemaModel.WebNoticeModel.find(sec).countDocuments()
        const result = await schemaModel.WebNoticeModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()
        return {
            noticeSum: content,
            notices: result
        }
    },
    // 查询前 记甜品 公告
    async NoticeFindTop() {
        return await schemaModel.WebNoticeModel.findOne({}).sort({
            _id: -1
        }).exec()
    },
    // 公告删除 通过id
    async NoticeDeleteById(id) {
        return await schemaModel.WebNoticeModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 前台用户等级组成
    async StatsWebUserLevel() {
        return await schemaModel.WebUserModel.aggregate([{
            $group: {
                _id: "$level",
                count: {
                    $sum: 1
                }
            },
        }]).exec();
    },
    // 统计 后台用户 等级信息
    async StatsAdminUserLevel() {
        return await schemaModel.AdminUserModel.aggregate([{
            $group: {
                _id: "$level",
                count: {
                    $sum: 1
                }
            },
        }]).exec();
    },
    // 统计用户性别组成
    async StatsWebUserGender() {
        return await schemaModel.WebUserModel.aggregate([{
            $group: {
                _id: "$genger",
                count: {
                    $sum: 1
                }
            },
        }]).exec();
    },
    // 统计用户性别组成
    async StatsAdminUserGender() {
        return await schemaModel.AdminUserModel.aggregate([{
            $group: {
                _id: "$genger",
                count: {
                    $sum: 1
                }
            },
        }]).exec()
    },
    // 统计 前端 用户 注册信息
    async StatsWebUserLogon() {
        return await schemaModel.WebUserModel.aggregate([{
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
        }]).exec();
    },
    // 添加评论
    async CommentInsert(params) {
        return await new schemaModel.CommentModel(params).save()
    },
    // 评论点赞
    async CommentNiceById(id, inc) {
        return await schemaModel.CommentModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                nice: inc
            }
        })
    },
    // 评论查询
    async CommentFindByPage(page, pageSteep, articleId, kind) {
        let sec = [{
            $match: {
                articleId: mongoose.Types.ObjectId(articleId),
                kind
            }
        }];
        const content = await schemaModel.CommentModel.aggregate(sec).exec()
        const result = await schemaModel.CommentModel.aggregate(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()

        for (const item of result) {
            item.user = await schemaModel.CommentModel.findOne({
                _id: mongoose.Types.ObjectId(item.userId)
            }).exec()
        }
        return {
            commentSum: content.length,
            comments: result
        }
    },
    // 通过id查询评论
    async CommentFindById(id) {
        return await schemaModel.CommentModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, {
            pass: 0
        }).exec()
    },
    // 评论详细查询
    async CommentFindByPageMore(page,
        pageSteep,
        kind,
        select,
        selectTime) {
        let regexp = new RegExp(select, 'i');

        let sec = [{
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
        let content = await schemaModel.CommentModel.aggregate(sec).exec()
        let result = await schemaModel.CommentModel.aggregate(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()

        for (const item of result) {
            item.user = await schemaModel.WebUserModel.findOne({
                _id: mongoose.Types.ObjectId(item.userId)
            }).sort()
        }

        return {
            commentSum: content.length,
            comments: result
        }
    },
    // 删除评论
    async commentDeleteByIdKind(kind, articleId) {
        return await schemaModel.CommentModel.deleteOne({
            kind,
            articleId
        })
    },
    // 删除评论通过id
    async commentDeleteById(id) {
        return await schemaModel.CommentModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 通过用户id删除评论
    async CommentDeleteByUser(id) {
        return await schemaModel.CommentModel.deleteMany({
            userId: mongoose.Types.ObjectId(id)
        })
    },
    // 随机 查询 10条 评论
    async commentRandom(sum = 10) {
        let result = await schemaModel.CommentModel.aggregate([{
            $sample: {
                size: sum
            }
        }]).sort({
            _id: -1
        }).exec();
        for (let item of result) {
            item.user = await schemaModel.WebUserModel.findOne({
                _id: mongoose.Types.ObjectId(item.userId)
            })
        }
        return result;
    },
    // 添加弹幕
    async DanMuInsert(params) {
        return await new schemaModel.DanMuModel(params).save()
    },
    // 通过用户id删除弹幕
    async DanMuDeleteByUser(id) {
        return await
        schemaModel.DanMuModel.deleteMany({
            userId: mongoose.Types.ObjectId(id)
        })
    },
    // 查询弹幕 0-2000
    async danmuFindRandomByVideoId(videoId) {
        return await schemaModel.DanMuModel.find({
            videoId: mongoose.Types.ObjectId(videoId)
        }, {
            content: 1,
            userId: 1,
            color: 1,
            start: 1,
            uploadTime: 1,
        }, ).sort({
            uploadTime: -1
        }).limit(2000).exec()
    },
    // 设置网站设置
    async webSetInsert(params) {
        // 删除网站设置 并添加新的 设置
        await schemaModel.WebSetsModel.deleteMany({})
        return await new schemaModel.WebSetsModel(params).save()
    },
    // 获取网站设置
    async webSetFindOnly() {
        return await schemaModel.WebSetsModel.findOne({}).limit(1).exec()
    },
    // 修改网站设置
    async webUpdate(params) {
        return await schemaModel.WebSetsModel.updateOne({
            _id: mongoose.Types.ObjectId(params._id)
        }, {
            $set: params
        })
    },
    // 添加工具
    async ToolInsert(params) {
        // 删除网站设置 并添加新的 设置
        return await new schemaModel.ToolModel(params).save()
    },
    async TooleWatchById(id) {
        return await schemaModel.ToolModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $inc: {
                watch: 1
            }
        })
    },
    // 分页查询工具
    async ToolFindByPage(page, pageSteep, select) {
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
        const content = await schemaModel.ToolModel.find(sec).countDocuments()
        const result = await schemaModel.ToolModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec();
        return {
            tools: result,
            toolSum: content
        }
    },
    // 工具详细查询
    async ToolFindById(id) {
        return await schemaModel.ToolModel.find({
            _id: mongoose.Types.ObjectId(id)
        }, {
            pass: 0
        }).exec()
    },
    // 删除工具
    async ToolDeleteById(id) {
        return await
        schemaModel.ToolModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 工具更新通过id
    async ToolUpdateById(id, params) {
        return await schemaModel.ToolModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    // 工具查看全部类型
    async ToolFindKind(select) {
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
        const result = await schemaModel.ToolModel.aggregate(sec).sort({
            _id: -1
        }).limit(20).exec()
        return result.map(val => val._id)
    },
    // 文件添加
    async VirtualFileInsert(params) {
        return await new schemaModel.VirtualModel(params).save()
    },
    // 文件列表查询
    async VirtualFileFind(params) {
        return await schemaModel.VirtualModel.find(params).exec()
    },
    // 文件列表分页
    async VirtualFileFindByPage(page, pageSteep, parentId, selectWord) {
        let sec = {
            parentId,
            name: {
                $regex: new RegExp(selectWord, 'i')
            }
        };
        const content = await schemaModel.VirtualModel.find(sec).countDocuments()
        const result = await schemaModel.VirtualModel.find(sec).sort({
            uploadTime: -1,
            kind: 1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()
        return {
            fileSum: content,
            files: result
        }
    },
    // 文件查询 通过id
    async VirtualFileFindById(id) {
        return await schemaModel.VirtualModel.findOne({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },
    // 文件查询 通过id 但结果不包含 id
    async VirtualFileFindByIdNotId(id) {
        return await schemaModel.VirtualModel.findOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            _id: 0
        }).exec()
    },
    // 文件夹下的文件查询
    async VirtualFileFindItemById(id) {
        return await schemaModel.VirtualModel.find({
            parentId: mongoose.Types.ObjectId(id)
        }).exec()
    },
    // 文件删除 通过 id
    async VirtualFileDeleteById(id) {
        return await schemaModel.VirtualModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 文件更新 通过id
    async VirtualFileUpdateById(id, params) {
        return await schemaModel.VirtualModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    // 文件查询通过 name 模糊查询
    async VirtualFileFindByName(name) {
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
        return await schemaModel.VirtualModel.find(sec).sort({
            _id: -1
        }).limit(40).exec()
    },
    // 通过角色数组查询对应角色
    async RoleFindByIds(ids) {
        let ObjectIds = ids.filter(val => val && val != "").map(val => mongoose.Types.ObjectId(val));

        return await schemaModel.AdminRoleModel.find({
            _id: {
                $in: ObjectIds
            }
        }).exec()
    },
    // 添加角色
    async RoleInsert(params) {
        return await new schemaModel.AdminRoleModel(params).save()
    },
    // 通过资源数组查询对应资源
    async ResourceFindByIds(ids) {
        let ObjectIds = ids.filter(val => val && val != "").map(val => mongoose.Types.ObjectId(val));

        return await schemaModel.AdminResourceModel.find({
            _id: {
                $in: ObjectIds
            }
        }).exec()
    },
    async ResourceFindByIds(ids) {
        let ObjectIds = ids.filter(val => val && val != "").map(val => mongoose.Types.ObjectId(val));

        return await schemaModel.AdminResourceModel.find({
            _id: {
                $in: ObjectIds
            }
        }).exec()
    },
    // 通过id查询资源
    async ResourceFindById(id) {
        return await schemaModel.AdminResourceModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },
    async ResourceFindById(id) {
        return await schemaModel.AdminResourceModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },
    // 添加资源
    async ResourceInsert(params) {
        return await new schemaModel.AdminResourceModel(params).save()
    },
    // 查询所有角色
    async RoleFindAll() {
        return await schemaModel.AdminRoleModel.find({}).exec()
    },
    // 角色分页查询
    async RoleFindByPage(page, pageSteep, select) {
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
        const content = await schemaModel.AdminRoleModel.find(sec).countDocuments()
        const result = await schemaModel.AdminRoleModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()
        return {
            roleSum: content,
            roles: result
        }
    },
    // 角色通过id查询
    async RoleFindById(id) {
        return await schemaModel.AdminRoleModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },
    // 通过ids获取全部角色信息
    async RoleFindByIds(ids) {
        let ObjectIds = ids.filter(val => val && val != "").map(val => mongoose.Types.ObjectId(val));

        return await schemaModel.AdminRoleModel.find({
            _id: {
                $in: ObjectIds
            }
        }).exec()
    },
    // 资源分页查询
    async ResourceFindByPage(page, pageSteep, select) {
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
        const content = await schemaModel.AdminResourceModel.find(sec).countDocuments()
        const result = await schemaModel.AdminResourceModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()
        return {
            resourceSum: content,
            resources: result
        }
    },
    // 通过ids 和关键字分页查询资源
    async ResourceFindByPageAndIds(page, pageSteep, select, ids) {
        let ObjectIds = ids.filter(val => val && val != "").map(val => mongoose.Types.ObjectId(val));

        let regexp = new RegExp(select, 'i');

        let sec = {
            _id: {
                $in: ObjectIds
            },
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
        const content = await schemaModel.AdminResourceModel.find(sec).countDocuments()
        const result = await schemaModel.AdminResourceModel.find(sec)
            .skip((page - 1) * pageSteep).limit(+pageSteep).exec()
        return {
            resourceSum: content,
            resources: result
        }
    },
    // 角色通过id 更新
    async RoleUpdateById(id, params) {
        return await schemaModel.AdminRoleModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    // 通过id更新资源
    async ResourceUpdateById(id, params) {
        return await schemaModel.AdminResourceModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    // 角色授权码查重
    async RoleFindByCode(code) {
        return await schemaModel.AdminRoleModel.find({
            code
        }).exec()
    },
    // 通过授权码查询资源
    async AuthorityResourceFindByCode(code) {
        return await schemaModel.AdminResourceModel.find({
            code
        }).exec()
    },
    // 角色授权码查重不包括自己
    async RoleFindByCodeNotYourself(code, id) {
        return await schemaModel.AdminRoleModel.find({
            code,
            _id: {
                $ne: mongoose.Types.ObjectId(id)
            },
        }).exec()
    },
    // 角色授权码查询不包括自己
    async ResourceFindByCodeNotYourself(code, id) {
        return await schemaModel.AdminResourceModel.find({
            code,
            _id: {
                $ne: mongoose.Types.ObjectId(id)
            },
        }).exec()
    },
    // 角色删除通过id
    async RoleDeleteById(id) {
        return await schemaModel.AdminRoleModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 资源删除通过id
    async AuthorityResourceDeleteById(id) {
        return await schemaModel.AdminResourceModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    async ResourceDeleteById(id) {
        return await schemaModel.AdminResourceModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },
    // 查询 管理菜单
    async ResourceFindRootMenu() {
        const result = await schemaModel.AdminResourceModel.find({
            kind: authorityEnum.menu.code,
        }).exec()
        return result.filter(val => val.parentId == "-1")
    },
    // 歌曲添加
    async SongInsert(params) {
        return await new schemaModel.SongModel(params).save()
    },
    async SongFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                name: {
                    $regex: regexp
                }
            }, ],
        };
        const content = await schemaModel.SongModel.find(sec).countDocuments()
        const result = await schemaModel.SongModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()
        return {
            songSum: content,
            songs: result
        }
    },

    async SongFindById(id) {
        return await schemaModel.SongModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },
    async SongFindByIds(ids) {
        let ObjectIds = ids.filter(val => val && val != "").map(val => mongoose.Types.ObjectId(val));

        return await schemaModel.SongModel.find({
            _id: {
                $in: ObjectIds
            }
        }).exec()
    },
    async SongUpdateById(id, params) {
        return await schemaModel.SongModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    async SongDeleteById(id) {
        return await
        schemaModel.SongModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },

    async PlayListInsert(params) {
        return await new schemaModel.PlayListModel(params).save()
    },
    async PlayListFindByPage(page, pageSteep, select) {
        let regexp = new RegExp(select, 'i');
        let sec = {
            $or: [{
                title: {
                    $regex: regexp
                },
            }, {
                subTitle: {
                    $regex: regexp
                },
            }, ],
        };
        const content = await schemaModel.PlayListModel.find(sec).countDocuments()
        const result = await schemaModel.PlayListModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()
        return {
            playlistSum: content,
            playlists: result
        }
    },

    async PlayListFindById(id) {
        return await schemaModel.PlayListModel.find({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    },

    async playListRandomFindOne() {
        return await schemaModel.PlayListModel.aggregate([{
            $sample: {
                size: 1
            }
        }]).exec()
    },

    async PlayListUpdateById(id, params) {
        return await schemaModel.PlayListModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: params
        })
    },
    async PlayListDeleteById(id) {
        return await
        schemaModel.PlayListModel.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        })
    },

    async SongFindByPageAndIds(page, pageSteep, select, ids) {
        let ObjectIds = ids.filter(val => val && val != "").map(val => mongoose.Types.ObjectId(val));

        let regexp = new RegExp(select, 'i');

        let sec = {
            _id: {
                $in: ObjectIds
            },
            $or: [{
                name: {
                    $regex: regexp
                }
            }],
        };
        const content = await schemaModel.SongModel.find(sec).countDocuments()
        const result = await schemaModel.SongModel.find(sec).sort({
            _id: -1
        }).skip((page - 1) * pageSteep).limit(+pageSteep).exec()
        return {
            songSum: content,
            songs: result
        }
    },
}