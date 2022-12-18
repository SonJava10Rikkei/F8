// Cho trước hàm joinWithCharacter có 2 tham số là array và charactor,
//  hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi là
//   kết quả của việc nối từng phần tử của mảng với charactor.

function joinWithCharacter(array, charactor) {
    return array.join(charactor);
}
var cars = ['Honda', 'Mazda', 'Mercedes'];
var result = joinWithCharacter(cars, ' - ');

console.log(result);


// function joinWithCharacter(array, charactor) {

//     return array.join(charactor);
// }
// var result = joinWithCharacter(['Honda', 'Mazda', 'Mercedes'], ' - ')
// console.log(result);