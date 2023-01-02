


// 4. Arrow function
// 5. Class
// 6. Default parameter value
// 7. Destructuring
// 8. Rest parameters
// 9. Spread
// 10. Enhanced object literals
// 11. Tagged template literal
// 12. Modules


// 1 ---- Deception function
// function logger(log) {
//     console.log(log);
// }
// logger('Message...');


//2---- expression Function
// var logger = function(log) {
//     console.log(log) ;
// }
// logger('Message...');


//3 ---- Arrow function

// const logger = (log) => {
//     console.log(log);
// }
// logger('Message...');


// const sum = (a, b) => {
//    return a + b;
// }
// console.log(sum(2, 2));

// cách viết ngắn gọn hơn bỏ ngoặc tự hiểu là khối code dùng từ khóa return
// const sum = (a, b) => a + b;
// console.log(sum(2, 2));

//
// const sum = (a, b) => {
//     return {
//         a: a,
//         b: b
//     };
// };
// console.log(sum(2, 2));


// Khi muốn return luôn ta có thế viết --------
// const sum = (a, b) => ({ a: a, b: b });
// console.log(sum(2, 2));

// khi có một đối số ta có thể viết ngắn gọn hơn ---
// const logger = log => console.log(log);
// logger('Message...')



//--------- Một số đặc tính ---------------

// khi sử dụng function thông thường

// const course = {
//     name: "Javascript basic",
//     getName: function () {
//         return this; //context
//     }
// };
// console.log(course.getName());


// // Arrow function không có context của nó ---

// const course2 = {
//     name2: "Javascript basic",
//     getName2: () => {
//         return this; //context
//     }
// };
// console.log(course2.getName2());


// Không thể sử dụng Arrow function làm function constructor được ------------

// vd:

// const Course3 = function (name, price) {
//     this.name = name;
//     this.price = price;
// }

// const jsCourse = new Course3("Javascript", 1000);
// console.log(jsCourse);


// LỖi không phải là constructor
// const Course3 =  (name, price) => {
//     this.name = name;
//     this.price = price;
// }

// const jsCourse = new Course3("Javascript", 1000);
// console.log(jsCourse);

