let link = require('./linkMongodb')

// 更新
// link.collection('users').update( {
//     name: 'xiaohuohu'
// }, {
//     $set: {
//         age: 100
//     }
// }).then((docs) => console.log('yes')).catch(err => console.log('error'))

// // 插入
// link.collection('users').insert( {
//     name: 'dasai',
//     age: 123
// }).then((docs) => console.log('yes')).catch(err => console.log('error'))

// 删除
link.collection('users').remove( {}).then((docs) => console.log('yes')).catch(err => console.log('error'))

// 查询
// link.collection('users').find({}).then((docs) => console.log(docs)).catch(err => console.log(err))