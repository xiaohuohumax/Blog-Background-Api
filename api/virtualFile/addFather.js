let link = require('../../mongoose/link');
let path = require('path');

// link.VirtualFileInsert({
//     adminId: "-1", // 用户id
//     parentId: -1, // 父目录
//     name: "", // 文件名
//     md5: "", // 文件保存md5
//     size: 0,
//     uploadTime: new Date(),
//     kind: "dir" // dir 文件夹 file 文件
// }).then(res => {
//     console.log(res)
// });

// link.VirtualFileFind({
//     parentId: -1
// }).then(res => {
//     console.log(res)
// })

// link.VirtualFileFindById("5fe80b27d719103e880bbeb0").then(res => console.log(res));


// 获取不重复文件名
async function getNoRepeatName(name, parentId = "-1") {
    // 查询同层所有文件
    let itemFile = await link.VirtualFileFind({
        parentId
    });
    let flag; // 修改标志
    let index = name.lastIndexOf(".");
    let suffix = name.substring(index); // 文件扩展名
    let fileName = name.substring(0, index); // 文件名字
    console.log(`[${suffix}][${fileName}]`)
    do {
        flag = false;
        for (let item of itemFile) {
            if (item.name == name) {
                name = `${fileName}(${Date.now()})${suffix}`;
                flag = true;
                break;
            }
        }
    } while (flag);
    return name;
}

// getNoRepeatName("新建文件夹.MP4", "-1").then(val => {
//     console.log(val)
// })

// let name = await getNoRepeatName(req.body.name,req.body.parentId);
// let result = await link.VirtualFileUpdateById(req.body.id, {
//     name, // 文件名
// });
// res.json(result);