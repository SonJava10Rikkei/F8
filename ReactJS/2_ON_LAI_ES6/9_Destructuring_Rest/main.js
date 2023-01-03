// 1. Let, const ---> OK
// 2. Template Literals ---> OK
// 3. Multi-line strings ---> OK
// 4. Arrow functions ---> OK
// 5. Classes ---> OK
// 6. Enhanced object literals
// 7. Default parameter values
// 8. Destructuring
// 9. Rest parameters
// 10. Spread
// 11. Tagged template literal
// 12. Modules

var array = ['Javascript', 'PHP', 'Ruby',];

// // var a = array[0];
// // var b = array[1];
// // var c = array[2];

// // console.log(a, b, c);

// // 8. Destructuring --------------

// var [a, b, c] = array;  // lấy ra phần tử của 1 mảng gán cho là a,b,c dùng ngoặc [], object dùng {}
// console.log(a, b, c);

// // lấy 2 phần tử của 1 mảng
// var [a, , c] = array;
// console.log(a, c);


// // 9. Rest parameters   toán tử lấy ra những phần còn lại -----------

// var [a, ...rest] = array;
// console.log(a);
// console.log(rest);  // trả về là 1 arr


// var course = {
//   name: 'JavaScript',
//   price: 1000,
//   image: "image/address",
// };

// var { name, price } = course;   // Không như arr, object cần gọi đúng key Name 
// console.log(name, price);

// var { name, ...rest } = course;
// console.log(name);
// console.log(rest); // trả về là một obj

// // Hãy xóa đi 1 key của 1 obj mà không dùng từ khóa delete. thì ta có thể dùng toán tử rest để tạo ra obj mới

// var { name, ...newObject } = course;

// console.log(newObject);


//////////////// Khi obj lại có 1 obj con thì chúng ta làm cách dưới ///////////////////

var course2 = {
  name1: 'JavaScript',
  price: 1000,
  image: "image/address",
  children: {
    name1: "React JS"
  }
};
// var { name, children } = course2;


// console.log(children);

// // lấy name của obj con bằng cách
// var { name: parentName, children: { name } } = course2; // Khi này bị ghi đè ta có thể dùng : để đổi tên cho key

// console.log(name);
// console.log(parentName);

// cũng có thể đổi tên cho obj con

var { name1: parentName, children: { name1: childrenName } } = course2;
// console.log(name1);    // ở đây sẽ lỗi vì key đã được đổi tên
console.log(childrenName);


//////// Khi có sẽ hiện ra khi không có hiện ra 1 giá trị gì đó //////

var course3 = {
  name3: 'JavaScript',
  price: 1000,
  image: "image/address",
  // description1 chưa được khai báo sẽ ra undefined
  description2: 'aaa'

};

var { name3, description1 } = course3;

console.log(description1);

var { name3, description1 = 'default description1' } = course3;
console.log(description1);

var { name3, description2 = 'default description2' } = course3;
console.log(description2); // Khi không có ra default description2
// khi ko có lấy ra aaaa



///////////////

// console.log(1, 2, 3, 4, 5, 6, 7, 8);

function logger(...params) { // vẫn là toán tử rest và trả về 1 mảng
  console.log(params);
}
logger(1,2,3,4,5,6,7,8);
