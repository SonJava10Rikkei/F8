/*
Viết hàm kiểm tra kiểu number #2
Cập nhật tháng 3 năm 2022

Để vượt qua thử thách trước, câu trả lời chỉ đơn giản như sau:

function isNumber(value) {
    return typeof value === 'number';
}
Tuy nhiên, trong JavaScript thì kiểu của NaN cũng là number:

console.log(typeof NaN); // 'number'
Chính vì vậy, nếu sử dụng hàm isNumber trên với 
đối số là NaN thì hàm vẫn trả về đúng:

console.log(isNumber(NaN)); // true
console.log(isNumber(100 / 'abc')); // true
Điều này có thể gây ra lỗi logic trong ứng dụng của bạn, 
bởi vì chúng ta tạo hàm isNumber với mục đích kiểm tra xem một giá trị
 có phải là số hay không, trong thực tế,
  chúng ta thường làm điều này trước khi thực hiện các phép tính toán.
  Nếu isNumber(NaN) cũng trả về true, 
  rất có thể logic phía sau đó NaN sẽ được đưa vào để tính toán
   và gây ra lỗi logic.

👉 Trong thử thách này, 
hãy viết hàm isNumber tương tự thử thách trước,
 nhưng hãy đảm bảo thêm rằng NaN không được coi là một số.
*/

function dayLaSo(value) {
    if (isNaN(value)) {
        return false;
    } else if (typeof value === 'number') {
        return true;
    } else {
        return false;
    }
}

// Expected results:
console.log(dayLaSo(999)); // true
console.log(dayLaSo('abc')); // false
console.log(dayLaSo('100')); // false

console.log(dayLaSo(NaN)); // false
console.log(dayLaSo(100 / 'abc')); // false