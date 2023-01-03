
// For/of loop

// Lấy ra phần tử cho 1 mảng hay các chữ của 1 chuỗi
// for of không áp dụng với Object  (có cách ở dưới)

var language = [
    'JavaScript',
    'PHP',
    'Java',
];

for (var value of language) {
    console.log(value);
};
// tách ra lấy từng value của 1 mảng

var language = 'Java';

for (var value of language) {
    console.log(value);
};

// tách ra lấy từng ký tự 1 chuỗi


// Dùng for of lấy giá trị của một Obj

var myInfo = {
    name: 'Son Danh',
    age: 18
};
console.log(Object.keys(myInfo));

for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value]);
};

console.log(Object.values(myInfo));
for (var value of Object.values(myInfo)) {
    console.log(value);
}