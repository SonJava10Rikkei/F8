/*
Mảng trong Javascript - Array

1. Tạo mảng 
    - Cách tạo mảng
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/
// --------------------     1. Tạo mảng   ------------------------------- //

var language = 'JavaScript';
var language2 = 'PHP';
var language3 = 'Ruby';

// quá nhiều biến phải khai báo nhiều lần

// thay vì đó ta có thế khai báo một mảng

var languages = [     // khởi tạo một mảng là mảng languages bằng đóng mở ngoặc vuông
    'Javascript',     // trong ngoặc gọi là các phần tử với chỉ mục từ 0 cho đến n phần tử của mảng
    'PHP',            // trong mảng này có độ dài là 3 phần tử
    'Ruby',
];

console.log(languages);


// Array có thể chứa được tất cả các kiểu dữ liệu trong javascript
var languages2 = [
    123,
    null,
    undefined,
    function () {

    },
    {},
]
console.log(languages2);

// cách 2 tạo 1 Array mới bằng từ khóa new (khuyến cáo nên sử dụng cách 1)

var languages3 = new Array(
    'Javascript',
    'PHP',
    123,
    null,
    undefined,
    function () {

    },
    {},
)

////// Cách kiểm tra kiểu dữ liệu
console.log(typeof languages3);

//********** */ để kiểm tra biến languages3 có phải là 1 Array hay không ********************************
console.log(Array.isArray(languages3));

// Array viết hoa chữ cái đầu chấm và gọi đến phương thức isArray
// đóng mở ngoặc tròn và chuyền biến muốn kiểm tra vào. Kết quả trả về boolean.

// --------------------    2. Truy xuất mảng   ------------------------ //

// -- độ dài của mảng

console.log(languages3.length);


// -- Lấy phần tử mảng theo index
// chỉ mục là index hoặc key

console.log(languages3[0]);     // vị trí đầu tiên
console.log(languages3[2]);     // vị trí thứ 2

