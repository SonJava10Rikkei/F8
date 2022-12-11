// Hiểu hơn về câu lệnh điều kiện
// và phép so sánh
/* Trong javascript convert sang boolean thì có 6 giá trị trả về là false
0
''
null
undefind
NaN
false
*/

// var a = 1;
// var b = 2;

// var result = a < b;
// console.log("result: " + result);

// if (a < b) {
//   console.log("A < B");
// } else {
//   console.log("A > B");
// }

// với các toán tử so sánh thì thường cho kết quả về dạng boolean
// nhưng cũng có những biểu thức không trả về dạng boolean

// ví dụ:

////////////////     Toán tử &&     ////////////////
// var a = 1;
// var b = 2;

// var result = "A" && "B" && NaN && "D";
// console.log("result: " + result);
// console.log(typeof result);

// if (result) {
//   // sau khi convert sang boolean
//   console.log("Điều kiện đúng");
// } else {
//   console.log("Điều kiện sai"); // log Điều kiện sai
// }

// Khi dùng toán tử && trong js thì luôn đọc từ vế trái sang vế phải.
// Nếu gặp giá trị mà khác với 6 giá trị false
// thì phải đọc qua vế phải và gán vào kết quả

////////////////     Toán tử ||     ////////////////
// Chạy từ trái qua phải nếu thấy khác với 6 giá trị    //
// 0, '', null, undefind, NaN, false thì lấy luôn        //

var a = 1;
var b = 2;

var result = "A" || "B" || NaN || "D";
console.log("result ", result); // log: A


