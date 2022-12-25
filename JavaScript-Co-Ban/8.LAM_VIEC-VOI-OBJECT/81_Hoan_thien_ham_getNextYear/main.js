// Hoàn thiện hàm getNextYear
// Cập nhật tháng 4 năm 2022

// Để vượt qua thử thách này, bạn hãy tạo hàm getNextYear,
//     hàm này sẽ trả về năm kế tiếp.Ví dụ, năm nay là 2022,
//     hàm sẽ trả về 2023 là kiểu số.

function getNextYear() {
    var date = new Date();
    var year = date.getFullYear();
    return ++year;
}
var result = getNextYear();
console.log(result);



function getNextYear(year) {
    var now = new Date();
    var nextyear = now.getFullYear();
    return ++nextyear;
}
console.log(getNextYear(2022));
