/*
Kiểu dữ liệu trong Javascript

1. Dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
*/

////////////    Number type     ////////////  
var a = 1;
var b = 2;
var c = 1.5;

////////////    String type     ////////////  
var fullName = 'Son Danh';
console.log(fullName);

var fullName2 = "Son 'Danh";  // in ra dấu nháy đơn '
console.log(fullName2);

var fullName3 = 'Son "Danh';  // in ra dấu nháy kép'
console.log(fullName3);

var fullName3 = 'Son \'Danh';  // in ra dấu nháy kép'
console.log(fullName3);

////////////    Boolean type     ////////////

var isSuccess = true;

////////////    Undefined type     ////////////
//không xác định//
var age;
console.log(age);

////////////    Null type     ////////////

var isNull = null;  // Không có gì
console.log(isNull);

////////////    Symbol type     ////////////

var id = Symbol('id');         //unique
var id2 = Symbol('id');         //unique

console.log(id, id2);
console.log(id === id2)

////////////////////////////  Dữ liệu phức tạp     ///////////////////////////

////////////    Function type     ////////////
// function tự định nghĩa
var myFunction = function () {
    alert('Hi. xin chao cac ban')
}
myFunction();      // code bên trong function chỉ được thực thi khi ta gọi tới function đó


/////////////    Object type     /////////////

var myObject = {
    name: 'Son Danh',
    age: 18,
    adress: 'Ha Noi',
    myFunction: function () {

    }
};
console.log('myObject', myObject);


/////////////    Array type     /////////////

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];

console.log(myArray);


////////////////////////////  Cách kiểm tra kiểu dữ liệu     ///////////////////////////
// typeof và biến muốn kiểm tra

console.log(typeof a);                      // kiểu number
console.log(typeof fullName);               //  kiểu string
console.log(typeof isSuccess);              //  kiêu boolean
console.log(typeof age);                    //      undefined
console.log(typeof isNull);                 //       mull là kiểu Object (Đặc biệt)
console.log(typeof id);                     //      symbol
console.log(typeof myFunction);             //      function
console.log(typeof myObject);               //      object
console.log(typeof myArray);                //      object

