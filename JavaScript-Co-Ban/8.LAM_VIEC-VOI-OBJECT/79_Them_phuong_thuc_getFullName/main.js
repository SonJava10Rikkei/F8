// Thêm phương thức getFullName
// Cập nhật tháng 4 năm 2022

// Để vượt qua thử thách này, bạn hãy tạo một object constructor Student gồm:
// firstName, lastName.Sau đó, định nghĩa thêm phương thức là getFullName,
//     phương thức này sẽ trả về tên đầy đủ của sinh viên.

// Giữa firstName và lastName cần có 1 khoảng trắng(1 dấu space).

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var user = new Student('Son','Danh');

console.log(user.getFullName());