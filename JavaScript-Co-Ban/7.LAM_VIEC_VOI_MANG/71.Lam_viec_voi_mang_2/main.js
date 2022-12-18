// Làm việc với mảng #2
// Cập nhật tháng 3 năm 2022

// Để vượt qua thử thách này,
//     hãy tạo hàm getLastElement có
// 1 tham số(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array),
//     hàm này sẽ trả về phần tử cuối cùng trong mảng.

// Viết hàm tại đây
function getLastElement(f8) {
    return f8.slice(-1)
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']





// function getLastElement(f8) {

//     return f8.slice(-1, f8.length);

// }

// var array = ['f8', 'f9', 'f10', 'f11'];
// var result = getLastElement(array)
// console.log(result);

