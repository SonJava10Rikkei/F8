// Tạo danh sách số ngẫu nhiên
// Cập nhật tháng 4 năm 2022

// Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như:
//  làm việc với array, đối tượng Math và loop.

// 👉 Hãy tạo hàm getRandNumbers có 3 tham số là
// min, max, length.Hàm này sẽ trả về một mảng gồm length phần tử,
//     các giá trị trong mảng là số ngẫu nhiên,
//         giá trị trong khoảng từ min tới max.

// Gợi ý: Math.random() * (max - min) + min là
// cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.

// Làm bài


function getRandNumbers(min, max, length) {
    var array = [];
    for (let i = 0; i <= length - 1; i++) {
        array[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return array;
}
console.log(getRandNumbers(1, 100, 3));


/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */