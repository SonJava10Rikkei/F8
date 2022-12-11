/*
Các loại function

1. Declaration function
2. Expression function
3. Arrow function
*/
// ----------------------------------------------------------------------------

// 1. Declaration function//
// đinh nghĩa từ khóa function đầu tiên + tên của function
// có hoiting nên có thể gọi ra trước rồi mới định nghĩa
function showMessage() {
  console.log("alo");
}
showMessage();

// // 2. Expression function//
// // đinh nghĩa đc gán cho 1 biến bằng toán tử gán bằng 1 function không cần tên

var showMessage2 = function () {
  console.log("alo2");
};
showMessage2();

// callBack ví dụ

setTimeout(function testName() {
  // trong 1 số trường hợp đặt tên cho function để dễ code hiểu hơn
  console.log("Nguyễn Sơn 1");
});
var myObject = {
  myFunction: function testName2() {
    console.log("Nguyễn Sơn 2");
  },
};
