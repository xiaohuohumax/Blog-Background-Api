let urlOriginTransform = require("./urlOriginTransform")
let encode =urlOriginTransform.urlOriginEncode("http://localhost:8888/visasd/asdasdasd/aaaa?sasd=123")
console.log(encode)
console.log(urlOriginTransform.urlOriginDecode(encode))