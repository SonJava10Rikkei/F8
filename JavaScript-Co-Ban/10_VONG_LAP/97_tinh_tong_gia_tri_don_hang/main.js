// Tính tổng giá trị đơn hàng
// Cập nhật tháng 6 năm 2022

// Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.

// Cho trước mảng orders là danh sách chứa các khóa học,
//     các mặt hàng này được thể hiện dưới dạng object
//      và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

// Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(arr) {        // gọi hàm có tham số là arr
    let orderslength = arr.length;// gọi biến bằng với độ dài của tham số arr truyền vào
    let sumOrder = 0;             // gọi biến gán giá trị bằng 0 để tính tổng
    for (let i = 0; i < orderslength; i++) {
        sumOrder += arr[i].price;      //vị trí của arr chấm thuộc tính price (lặp đến hết độ dài orderslength)
    }
    return sumOrder;        // trả về kết quả
}

// Expected results:
var total = getTotal(orders) // Output: 8700000   đặt biến để in ra
console.log(total)
