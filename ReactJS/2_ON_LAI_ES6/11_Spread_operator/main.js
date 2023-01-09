// Spread

// Toán tử dải các thành phần
// hợp nhất 2 mảng, hợp nhất 2 objects

// var array = ['Javascript', 'Ruby', 'PHP']
// var array2 = ['React', 'Dart']

// var array3 = [...array, ...array2] // Nối mảng
// console.log(array3);


// var object1 = {
//   name: "Javascript",
// };
// var object2 = {
//   price: 1000,
// };
// var object3 = {
//   ...object1,
//   ...object2,

// };
// console.log(object3);



// var defaultConfig = {
//   api: 'http://domain-trang-khoa-hoc',
//   apiVersion: 'V1',
//   other: 'other',
//   //
//   //
//   //
// }

// var exerciseConfig = {
//   ...defaultConfig,
//   api: 'http://domain-trang-bai-tap', // api ở đây sẽ bị ghi đè
// }

// console.log(exerciseConfig);

///////////// Toán tử Spread truyền tham số cho hàm

var array = ["Javacript", 'PHP', "Ruby", "ReactJS"];
function logger(...rest) {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}
logger(...array)