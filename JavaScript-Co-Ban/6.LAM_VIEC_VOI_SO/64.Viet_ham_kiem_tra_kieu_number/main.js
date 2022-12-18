// Viết hàm kiểm tra kiểu number #1

// Để vượt qua thử thách này, hãy thực hiện theo các yêu cầu sau:

// Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không
// Hàm isNumber có 1 tham số, hãy đặt tên nó là value
// Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false


function isNumber(value) {
    // var isNumber = 1;
    if (typeof value === 'number') {
        return true;
    } else {
        return false;
    }
};

console.log(isNumber(999));
console.log(isNumber('abc'));
console.log(isNumber('100'));

