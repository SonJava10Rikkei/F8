// Tính tổng các phần tử là số của mảng
// Cập nhật tháng 6 năm 2022

// Cho trước mảng numbers,
//     hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.

function getTotal(arr) {
    var array = 0;
    for (let i = 0; i < arr.length; i++) {
        array += arr[i];
    }
    return array;
}

// Expected results
var a =
    // getTotal([1, 2, 3]) // Output: 6
    // console.log(a);

// getTotal([4, 5, -3]) // Output: 6
// console.log(a);

getTotal([4, 5, 3, 5]) // Output: 17
console.log(a);
