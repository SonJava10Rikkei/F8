// Bài tập sử dụng for...in
//     Cập nhật tháng 6 năm 2022

// Để vượt qua thử thách này, trước tiên,
//     hãy quan sát code cho trước và kết quả mong đợi(bên code editor).

// 👉 Hãy hoàn thành hàm sao cho kết quả được như kết quả mong đợi.

function run(object) {
    let myInfo = [];
    for (let key in object) { 
        var a = (`Thuộc tính ${key} có giá trị ${object[key]}`)
        myInfo.push(a)
    }
    return myInfo;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]