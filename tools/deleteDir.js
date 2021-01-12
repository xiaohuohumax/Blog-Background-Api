let fs = require('fs');
let path = require('path');

module.exports = function deleteFolder(url) {
    if (fs.existsSync(url)) {
        let files = fs.readdirSync(url);
        files.forEach(function (file) {
            let curPath = path.join(url , file) ;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(url);
    }
}