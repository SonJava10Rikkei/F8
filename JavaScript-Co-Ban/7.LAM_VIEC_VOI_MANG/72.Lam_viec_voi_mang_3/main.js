// Làm việc với mảng #3
// Cập nhật tháng 3 năm 2022

// Để vượt qua thử thách này, hãy tạo hàm getFirstElement
//  có 1 tham số(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array),
//     hàm này sẽ trả về phần tử đầu tiên trong mảng.

//     Hàm getFirstElement hoạt động đúng như yêu cầu

// Viết hàm tại đây
function getFirstElement(f8) {

    return f8.slice(0, 1);
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']