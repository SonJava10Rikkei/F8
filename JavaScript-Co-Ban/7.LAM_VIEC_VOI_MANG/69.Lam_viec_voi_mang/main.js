/*
Làm việc với Array

// Keyword: javascript array methods

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splice
8. Concat
9. Slicing

*/

// ------------------    1. To String   ------------------
// chuyển mảng object sang là dữ liệu string

// var languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',

// ];
// console.log(typeof languages);              // log object
// console.log(languages.toString());          // chuyển sang bằng methods
// console.log(typeof languages.toString());   // log string

// // ------------------    2. To join   ------------------
// // chuyển mảng object sang là dữ liệu string và thêm ngăn cách tùy ý
// console.log(languages.join());    // log giống như toString
// console.log(languages.join(''));  // log JavaScriptPHPRuby đc viết liền với nhau
// console.log(languages.join(' ')); // log JavaScript PHP Ruby
// console.log(languages.join(' - ')); // log JavaScript-PHP-Ruby

// // dấu ngăn chác là dấu gạch ngang


// // ----------------------------------    3. Pop   -------------------------------------
// // Xóa element (phần tử) cuối mảng và trả về phần tử đã xóa

// console.log(languages.pop()); // xóa phần tử cuối là 'Ruby'
// console.log(languages);       // trả lại mảng còn 2 phần tử là 'javascript' và 'PHP'

// console.log(languages.pop()); // gọi 1 lần nữa sẽ xóa tiếp 1 phần tử ở cuối nữa
// console.log(languages);
// console.log(languages.pop());
// console.log(languages.pop());  // khi xóa hết thì log xóa tiếp sẽ trả về undefined
// console.log(languages);        // và còn lại sẽ là 1 mảng rỗng


// // ----------------------------------------    4. push   -----------------------------------
// // Thêm 1 hay nhiều phần tử vào cuối mảng và trả về độ dài mới và kết quả mới của mảng

// console.log(languages.push('Dart'));  // log in ra số 1 và in ra mảng gốc của chúng ta
// console.log(languages);

// console.log(languages.push('JavaScript2', 'PHP2')); // log in ra số 3 và in ra mảng gốc của languages
// console.log(languages);


// // -----------------------------------------------    5. shift   -------------------------------------
// // Xóa đi 1 phần tử ở đầu mảng và trả lại kết quả mới của mảng mà shift đã xóa

// console.log(languages.shift());
// console.log(languages);

// // ----------------------------------------    6. unshift   -----------------------------------------
// // Thêm vào 1 hay nhiều phần tử vào đầu mảng và trả về độ dài mới và kết quả mới của mảng

// console.log(languages.unshift('JS3'));
// console.log(languages);

// console.log(languages.unshift('Ruby', 'Ruby2', 'Ruby3'));
// console.log(languages);


// ----------------------------------------    7. Splice   ----------------------------------------------
// có thể xóa cắt và chèn phần tử mới vào mảng



// var languagesA2 = [
//     'JavaScript',   // index 0
//     'PHP',          // index 1
//     'Ruby',         // index 2
//     'Dart',
//     'NodeJS',
//     'C++',
//     'Java',         // index 6
//     //length = 7
// ];

//// xóa:
// ví dụ xóa bỏ 'PHP':

// languagesA2.splice(1, 1);           //tham số thứ nhất là phần tử bắt đầu làm gốc và đến phần tử thứ hai
// // xóa phần tử bắt đầu và bao nhiêu phần tử phía sau nó (đếm từ phần tử bắt đầu là một) . Nếu phần tử thứ 2
// // bằng không thì sẽ không xóa phần tử nào
// console.log(languagesA2);


//// cắt:
//cắt bỏ 3 phần tử từ 'Ruby' đến 'NodeJS'

// languagesA2.splice(2, 3);
// console.log(languagesA2);


//// xóa và thêm
// ví dụ xóa bỏ 'C++' và chèn 'Danh Son' vào vị trí đó

// languagesA2.splice(5, 1, 'Danh Son')
// console.log(languagesA2);


//// cắt và thêm
// cắt bỏ 4 phần tử từ 'PHP' đến 'NodeJS' sau đó thêm 1 phần tử 'Toan Hoc' vào vị trí đầu tiên được cắt

// languagesA2.splice(1, 4, 'Toan hoc')
// console.log(languagesA2);


//// chèn 1 phần tử mới đứng vào vị trí của 1 phần tử cũ mà không mất đi phần tử cũ đó
// ví dụ muốn chèn phần tử 'Hoa Hoc' vào vị trí 'Dart'

// languagesA2.splice(3, 0, 'Hoa Hoc');
// console.log(languagesA2);



// languagesA2.splice(2, 3, 'Son 93'); // tham số thứ nhất là 2 đếm 0,1,2  ('Ruby')
// // xóa phần tử vị trí số 2 và 3 phần tử đứng sau đếm từ vị trí số 2  ('Ruby' đến 'NodeJS')
// // và thêm 1 phần tử mới ('Son 93' vào vị trí số 2)
// console.log(languagesA2);

// nếu phần tử sô hai là 0 thì thì sẽ không xóa phần tử nào mà chèn thêm phần tử mới vào chỗ phần tử bắt đầu
// languagesA2.splice(3, 0, 'Son 93');
// console.log(languagesA2);

// languagesA2.splice(99, 1, 'Son 93');
// console.log(languagesA2);



// --------------------------------------   8. Concat   -------------------------------------------------

var languagesNum1 = [
    'JavaScript',   // index 0
    'PHP',          // index 1
    'Ruby',         // index 2   length 3
];

var LGNum2 = [
    'Dart',
    'NodeJS',
    'C++',
    'Java',         // length 4

];

// console.log(languagesNum1.concat(LGNum2));

// kết quả là 1 Array được hợp nhất từ Array sau vào Array đầu tiên

var Num = [
    1,
    3,
    5,
]

// console.log(LGNum2.concat(Num, languagesNum1));

// cộng nhiều Array với nhau chỉ cần thêm dấu phảy (,)

// --------------------------------------   9. slice   -------------------------------------------------
// Cắt một vài element (phần tử) của mảng. 
// có thể cắt toàn bộ hoặc cắt lấy một vài phần tử của mảng

var languagesIt = [
    'javascript',
    'PHP',
    '123',
    'Ruby'
]

// cắt lấy 'PHP'
console.log(languagesIt.slice(1, 2));

// cắt lấy từ 'PHP' đến hết mảng
console.log(languagesIt.slice(1));

// coppy mảng 
console.log(languagesIt.slice(0));

// truyền số âm để lấy được phần tử ở cuối mảng

console.log(languagesIt.slice(-2, -1));



/*
    * Các kiểu phương thức của Array:
* toString() : chuyển mảng thành chuỗi
    * join() : chuyển mảng thành chuỗi và thêm ký tự nối giữa các phần tử
        * pop() : xóa phần tử cuối mảng và trả về phần tử đó
            * push() : thêm phần tử vào cuối mảng và trả về độ dài mảng mới
                * shift() : xóa phần tử đầu mảng và trả về phần tử đó
                    * unshift() : thêm phần tử vào đầu mảng và trả về độ dài mảng mới
                        * splice() : xóa phần tử trong mảng và thêm phần tử mới vào vị trí cần thêm
                            * slice() : lấy ra một phần mảng mới từ mảng cũ
                                * concat() : nối mảng mới vào mảng cũ
                                    * reverse() : đảo ngược mảng
                                        * sort() : sắp xếp mảng
                                            *
* /
const Arr = [“Java”, “Javascript”, “PHP”, “Python”, “C++”];
console.log(Arr.splice(0, 3, “Ruby”, “C#”));
console.log(Arr.sort());
console.log(Arr);
console.log(Arr.reverse());
console.log(Arr.concat([“Java”, “Javascript”, “PHP”, “Python”, “C++”]));
console.log(Arr.slice(0, 3));
console.log(Arr.shift());
console.log(Arr.unshift(“Java”));
console.log(Arr.pop());
console.log(Arr.push(“C++”));
console.log(Arr.join(" - "));
console.log(Arr.toString()); /
    * Các kiểu phương thức của Array:
 * toString() : chuyển mảng thành chuỗi
    * join() : chuyển mảng thành chuỗi và thêm ký tự nối giữa các phần tử
        * pop() : xóa phần tử cuối mảng và trả về phần tử đó
            * push() : thêm phần tử vào cuối mảng và trả về độ dài mảng mới
                * shift() : xóa phần tử đầu mảng và trả về phần tử đó
                    * unshift() : thêm phần tử vào đầu mảng và trả về độ dài mảng mới
                        * splice() : xóa phần tử trong mảng và thêm phần tử mới vào vị trí cần thêm
                            * slice() : lấy ra một phần mảng mới từ mảng cũ
                                * concat() : nối mảng mới vào mảng cũ
                                    * reverse() : đảo ngược mảng
                                        * sort() : sắp xếp mảng
                                            *
 * /
const Arr = [“Java”, “Javascript”, “PHP”, “Python”, “C++”];
console.log(Arr.splice(0, 3, “Ruby”, “C#”));
console.log(Arr.sort());
console.log(Arr);
console.log(Arr.reverse());
console.log(Arr.concat([“Java”, “Javascript”, “PHP”, “Python”, “C++”]));
console.log(Arr.slice(0, 3));
console.log(Arr.shift());
console.log(Arr.unshift(“Java”));
console.log(Arr.pop());
console.log(Arr.push(“C++”));
console.log(Arr.join(" - "));
console.log(Arr.toString());
*/