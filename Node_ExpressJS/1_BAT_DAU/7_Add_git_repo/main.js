/*
Ở bảng Terminal bấm Ctrl + C để thoắt server

chạy lại node index.js 
thì trang web mới làm mới lại

Nodemon để lắng nghe sự thay đổi của những file trong source và reload server

B1. Cài nodemon
https://www.npmjs.com/package/nodemon

gõ lệnh tại bảng Terminal
npm i nodemon --save-dev

B2. Sang file package.json 
trỏ xuống phần Debug 
thêm dòng code 
    "start": "nodemon --inspect index.js",

B3. chạy npm bằng cách ở bản Terminal
 gõ lệnh npm.start


 ctrl + c để tắt 
*/