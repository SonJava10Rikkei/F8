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

// - Đinh nghĩa key : value cho object ngắn gọn hơn
// - Định nghĩa method cho object
// - Đinh nghĩa key cho object dưới dạng biến


// var name = 'Javascript';
// var price = 1000;

// var course = {
//     name: name,
//     price: price,
// };

// console.log(course);


// cách viết tương tự nhưng ngắn gọn hơn
// var name = 'Javascript';
// var price = 1000;

// var course = {
//     name,
//     price,
//     getName () {
//         return name;
//     }
// };

// console.log(course.getName());



// lấy ra từ value biến
// Tùy vào giá trị của biến mà ta lấy ra giá trị value của 1 object ta dùng cách dưới
var fieldName = 'new-name';
var fieldPrice = 'price';

const course = {
    name: "Javascript",
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000,

}

console.log(course);