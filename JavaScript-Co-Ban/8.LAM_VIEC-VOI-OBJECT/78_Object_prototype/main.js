/*
Object prototype - Basic

    1. Prototype la gi?
    2. Sử dụng khi nào?
*/

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// thêm 1 thuộc tính bên ngoài hàm tạo bằng prototype

User.prototype.className = 'F8';

// thêm 1 phương thức bên ngoài hàm tạo

User.prototype.getClassName = function () {
    return this.className;
};


var user = new User('Son', 'Danh', 'Avatar 1');
var user2 = new User('Tan', 'Dang', 'Avatar 2');

console.log(user);
console.log(user2);
console.log(user.className);
console.log(user2.getClassName());

