/*
B1 lên trang 
https://www.npmjs.com/package/morgan

HTTP request logger middleware for node.js
"Phần mềm trung gian ghi nhật ký yêu cầu HTTP cho node.js"

Tại bảng Terminal gõ 
npm i morgan --save-dev

Để sử dụng cần require vào file index.js

const morgan = require('morgan')


B2. Gán một số mấu Examples vào file index.js

var express = require('express')
var morgan = require('morgan')
 
var app = express()   
 
app.use(morgan('combined'))  // chỉ cần dán dòng này
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})


Để kiểm tra người dùng thao tác phản hồi trên trình duyệt của mình
để dễ dàng tìm Debug khi người dùng gửi lên server bị gặp lỗi gì
404
500 ,..

*/