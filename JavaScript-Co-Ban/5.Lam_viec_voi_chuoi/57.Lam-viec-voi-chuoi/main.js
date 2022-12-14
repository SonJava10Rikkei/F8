
// LÀM VIỆC VỚI CHUỖI

var myString = 'Hoc JS tai JS JS F8!';

// Keywords: Javascript string methods

// PHƯƠNG THỨC:
// 1. Length    //kiểm tra độ dài
console.log(myString.length);  // log : 20
// // 2. Find index    //Tìm ra được vị trí của 1 ký tự nằm trong 1 chuỗi
console.log(myString.indexOf('JS')); //log: 4  nằm ở vị trí số 4 đếm từ 0

console.log(myString.indexOf('JS', 6)); //log: 11   tìm ở vị trí thứ 6

console.log(myString.search('JS', 6)); //log: 4   tìm theo biểu thứ chính quy

///// 3. Cut string    // cut string
var myString2 = 'Hoc JS tai F8!';

// console.log(myString2.slice(4, 6)); // log : JS   cắt từ vị trí t4 đến t6
console.log(myString2.slice(4)); // log : JS   cắt từ vị trí t4 đến hết

//// 4. Replace    //ghi đè 
console.log(myString.replace('JS', 'Javascript')); //log: Từ JS đổi sang Javascript
// ở đây chỉ thay đổi text ở vị trí đầu tiên còn sau giữ nguyên
//
console.log(myString.replace(/JS/g, 'Javascript')); //log:
///// Tìm kiếm theo biểu thức chính quy thì all chữ cần tìm đều được thay đổi


//// 5. Convert to upper case    // chuyển đổi thành chữ hoa
console.log(myString.toUpperCase());

///// 6. Convert to lower case    // // chuyển đổi thành chữ thường
console.log(myString.toLowerCase());


/////// 7. Trim    // Loại bỏ ký tự thừa khoảng trắng ở 2 đầu  /////

var myString3 = '   Hoc JS tai F8!   '
console.log(myString3.length);              //log:20
console.log(myString3.trim());              // log: Hoc JS tai F8!
console.log(myString3.trim().length);       // log : 14

/////// 8. Split    //cắt 1 chuỗi chuyển thành 1 array       /////

var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(",")); // viết điểm chung mà ta có thể tách (dấu phảy)
console.log(languages.split(", ")); // viết điểm chung mà ta cần cắt tìm ra điểm chung hợp lý (dấu , và khoản trắng)
console.log(languages.split("")); // cắt tất cả các từ thành phần tửu của bạn


// 9. Get a character by index    //Lấy 1 ký tự bởi 1 vị trí có trước //////

var myString4 = 'Son Danh'
console.log(myString4.charAt(6));   //log: n
console.log(typeof myString4.charAt());

