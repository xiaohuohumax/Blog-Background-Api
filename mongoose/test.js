let link = require('./link')

// link.ArticleInsert({
//     title: "时间过客阿斯达",
//     subTiltle: "过客奥术大师",
//     uploadTime: new Date(),
//     iocn: 'asdasd',
//     tags: ['时间奥术大师', '过客奥术大师']
// }).then(res => console.log(res)).catch(err => console.log(err))

link.ArticleFind({}).then(res => console.log(res)).catch(err => console.log(err))