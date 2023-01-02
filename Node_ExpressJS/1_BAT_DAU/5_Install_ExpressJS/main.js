/*
https://nodejs.org/en/

Nodejs là gì Node.js® là môi trường thời gian chạy JavaScript đa nền tảng, mã nguồn mở.

kiểm tra cài đặt đc nodejs chưa bằng cách mở Terminal 
- gõ lệnh   : node -v  (kiểm tra vertion)
tự động cài theo quản lý thư viện nodejs
- gõ lệnh   :   npm -v (kiểm tra vertion)

---------- tạo project về nodejs ----------
- gõ lệnh :  npm init

tạo ra file package.jon

- Tạo file mới là index.js 

- Cài đặt Express:
Truy cập trang web dưới
https://www.npmjs.com/package/express

 ------------------------------------ b1. Làm theo hướng dẫn  ------------------------------------
coppy dòng code vào file index.js

 ------------------------------------ b2. Gõ vào Terminal dòng lệnh dưới để cài đặt  ------------------------------------

$ npm install express

 ------------------------------------b3. Vào Expressjs  ------------------------------------
https://expressjs.com/

Click menu Gettings strared 
làm theo hướng dẫn

ở dưới bấm vào Next: Hello World

--dán dòng code vào file index.js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

 ------------------------------------ b4. chạy file index.js ------------------------------------
tại Terminal gõ 
node index.js  
kiểm tra đường dẫn tại trình duyệt 
http://localhost:3000


*/