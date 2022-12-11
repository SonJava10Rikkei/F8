// Tham số hàm - Javascript cơ bản

/*
1. Tham số?
  - Định nghĩa
  - Kiểu dữ liệu      // không giới hạn
  - Tính private      // tính riêng tư
  - 1 tham số
  - Nhiều tham số     // các tham số cách nhau bởi dấu phẩy

2. Truyền tham số
  - 1 tham số
  - Nhiều tham số

3. Arguments?
  - Đối tượng arguments           // ví dụ như console.log('');
  - Giới thiệu vòng for

*/
// ---------------------------------------------------------------- //

// 1. Tham số ?
// - Tham số trong hàm để tính toán, truyền dữ liệu,.... trong function.

// function writeLog(message) {
//   // tham số
//   console.log(message);
//   console.log(typeof message);
// }
// writeLog("test message"); // đối số

function writeLog() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
  }
  console.log(myString);
}
writeLog("Log 1", "Log 2", " Log 3", 5, 6, 7, 8);
