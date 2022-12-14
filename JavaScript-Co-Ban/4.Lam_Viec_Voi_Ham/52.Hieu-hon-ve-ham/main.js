/*
Một số điều cần biết về function

1. Khi function đặt trùng tên? 
2. Khai báo biến trong hàm?
3. Định nghĩa hàm trong hàm?
*/

// 1. Khi function đặt trùng tên?

function showMessage() {
  console.log("Message 1");
}
function showMessage() {
  console.log("Message 2");
}
function showMessage() {
  console.log("Message 3");
}

// showMessage();
// Cái function định nghĩa sau sẽ gi đè function trước

// 2. Khai báo biến trong hàm?//
// có thể khai báo biến ở trong hàm

function showMessage() {
  var fullName = "Son Nguyen"; // khi được định nghĩa trong function thì
  console.log(fullName); // log Son Nguyen // phạm vi chỉ có trong function thôi
}
showMessage();
// console.log(fullName);      // dòng log ở đây sẽ bị lỗi vì không có quyền truy cập

// 3. Định nghĩa hàm trong hàm?
// có thể//

function showMessage() {
  function showMessage2() {
    console.log("Message 2");
  }
  showMessage2(); // phạm vi sử dụng chỉ trong 1 function
}
showMessage();

// showMessage2();  // nếu đưa gọi hàm ra đây sẽ gặp lỗi chưa đc định nghĩa
