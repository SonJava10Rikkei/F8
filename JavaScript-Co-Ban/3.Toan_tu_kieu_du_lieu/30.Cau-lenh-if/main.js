/**
 * If và else
 * 
 * giá trị
 * 
 * 0
 * false
 * """   chuỗi rỗng
 * undefined               => 6 giá trị này khi sang js thì là false
 * NaN                                   còn lại là true
 * null
 */

// var isSuccess = 1 < 2;

// if (true) {
//     console.log('Dieu kien dung');
// } else {
//     console.log('Dieu kien sai');

// }

// if (isSuccess) {
//     console.log('Dieu kien dung');
// } else {
//     console.log('Dieu kien sai');

// }


var fullName = 'Son Danh';
if (fullName) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}

var fullName = 0;
if (fullName) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}