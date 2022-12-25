// Đối tượng Date
// Chúng ta có thể truy xuất để lấy ra các phương thức hoặc thuộc tính của Date 

var date = new Date();

// console.log(date);
// console.log(typeof date); // object

var year = date.getFullYear(); // lấy ra năm
var month = date.getMonth() + 1; // lấy ra tháng
var date2 = date.getDate(); // lấy ra ngày
var day = date.getDay(); // lấy ra thứ
var hours = date.getHours(); // lấy ra thứ giờ
var minutes = date.getMinutes(); // lấy ra phút
var seconds = date.getSeconds(); // lấy ra giây


console.log("Năm " + year);
console.log("tháng " + month);
console.log("ngày " + date2);
console.log("thứ " + day);
console.log("giờ " + hours);
console.log("phút " + minutes);
console.log("giây " + seconds);


console.log(`${date2}/${month}/${year}`);


