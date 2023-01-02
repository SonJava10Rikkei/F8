/*
Template engines (handlebars)

truy cập trang web

https://www.npmjs.com/package/express-handlebars

Cài bằng dòng lệnh ở bảng Terminal

$ npm install express-handlebars --save

------ Tạo 1 thư mục src ở ngoài ------

B1. Dán code vào file index.js

const exphbs = require('express-handlebars');


// Template engines(handlebars)
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

Đổi 
app.get("/", (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
    res.send("123");
});

thành 


app.get('/', (req, res) => {
    res.render('home');
});
*/
