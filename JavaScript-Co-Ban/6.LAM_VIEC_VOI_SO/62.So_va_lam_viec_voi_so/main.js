/*
Kiểu số (Number) trong Javascript

1. Tạo giá trị Number
     - Các cách tạo
     - Dùng cách nào ? Tại sao?
     - Kiểu tra dât type
// Keyword: Javascript number methods (tìm hiểu thêm)


2. Làm việc với Number
     - To String
     - To Fixed
*/

// //////////////////////// Cách tạo // //////////////////////// 
var age = 18;
var PI = 3.14;

var otherNumber = new Number(9);

// tránh cách sử dụng từ khóa new vì nó khởi tạo 1 đối tượng 1 ô nhớ mới


var result = 20 / "ABC";

console.log(result);   // log NaN

console.log(typeof result);


// KIểm tra biến như thế nào la NaN

console.log(isNaN(result));  // log true   đây có phải là NaN không?

// NaN đại diện cho 1 kiểu số không hợp lệ



////////////////////////// 2. Làm việc với Number // ////////////////////////

/////// To String   biến 1 số thành dữ liệu chuỗi
var age1 = 18;

console.log(age1.toString());


//// kiểm tra phải là chuỗi không?

console.log(typeof age1.toString());

var myString = age1.toString();
console.log(typeof myString);


//////////// To Fixed  để muốn làm tròn số thập phân

console.log(PI.toFixed());  // log 3
console.log(typeof PI.toFixed());

var soTienThanhToan = 3000.26428634246;

console.log(soTienThanhToan.toFixed(4));  // log 3000.2643  làm tròn 4 số sau số thập phân

console.log(Number(soTienThanhToan.toFixed(3)));   // chuyển sang dữ liêu số 