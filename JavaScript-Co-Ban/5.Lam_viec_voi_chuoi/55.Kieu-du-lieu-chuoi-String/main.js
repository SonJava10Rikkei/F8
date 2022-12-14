/*
CHUỖI TRONG JAVASCRIPT

1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng các nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem đội dài chuỗi
4. Chú ý độ dài khi viết Code
5. Template string ES6
*/

///////////////////////////////     1. Tạo chuỗi    ///////////////////////////////

// cách 1:
// var fullName = ' Son Danh';                   //nên dùng cách 1
// // cách 2:
// var fullName = new String('Son Danh 2');     // Khởi tạo 1 đối tượng trong 1 ô nhớ mới kiểu dữ liệu object
// alert(fullName);
// console.log(typeof fullName);


///////////////////////////////     2. Một số case sử dụng backslash (\)    ///////////////////////////////

// var fullName = 'Son Danh là \'Siêu Nhân\'';  // dùng dấu gạch chéo ngược \'Siêu nhân \'
// var fullName = 'Day la dau \\';
// console.log(fullName);

// tìm hiểu thêm trên google với cú pháp  'backslash in javascript'
//SyntaxError là lỗi code sai về mặt cú pháp//

///////////////////////////////     3. Xem đội dài chuỗi    ///////////////////////////////

var fullName = 'Son Danh';

console.log(fullName.length);

///////////////////////////////    4. Chú ý độ dài khi viết Code    ///////////////////////////////

// số lượng ký tự trên 1 dòng khoảng 80 ký tự
// dùng toán tử nối chuỗi khi cần

// ví dụ:

var fullName = 'Một số case sử dụng backslash'
    + ' 1. Một số case sử dụng backslash'
    + ' 2. Một số case sử dụng backslash'
    + ' 3. Một số case sử dụng backslash'
    ;

console.log(fullName);

///////////////////////////////    5. Template string ES6    ///////////////////////////////

var firstName = 'Son';
var lastName = 'Danh';

console.log('Toi la: ' + firstName + ' ' + lastName);  // cách viết bình thường

console.log(`Toi la: ${firstName} ${lastName}`);  // Khái niem Template String

// ==> đưa 1 biến vào với ${biến} giá trị đưa vào là string nếu ko phải thì sẽ tự convert về string.

