// Lấy ngẫu nhiên phần tử của mảng
// Cập nhật tháng 5 năm 2022

// Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số
//  là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.


function getRandomItem(arrayName) {
    var random = Math.floor(Math.random() * arrayName.length);
    return arrayName[random]
}
console.log(getRandomItem(["son","Long","huy",1]));