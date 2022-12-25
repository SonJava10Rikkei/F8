// Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User("Son", "Danh", "Avatar");
var user = new User("Vu", "Nguyen", "Avatar");

console.log(author);
console.log(user);


// kiem tra bản thiết kế giống với nhìn lại giống với object constructor không
console.log(author.constructor === User);

// thêm thuộc tính

author.title = "Chia sẻ tại f8";
user.comment = "Bài này làm thế nào?";

console.log(author);
console.log(user);

// sau khi thêm phương thức 
console.log(author.getName());
console.log(user.getName());