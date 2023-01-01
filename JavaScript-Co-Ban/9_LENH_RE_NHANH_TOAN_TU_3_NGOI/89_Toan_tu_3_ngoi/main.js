

// Toán tử 3 ngôi - Ternary operator


var course = {
    name: 'Javascript',
    coin: 0
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Miễn phí');
// }

// Toán tử 3 ngôi

var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi';

console.log(result);

var a = 1;
var b = 2;

var c = a > 0 ? a : b;
console.log(' C ở đây là ' + c);

// với biến c nếu a lớn hơn 0 thì lấy a nếu ko thì lấy b