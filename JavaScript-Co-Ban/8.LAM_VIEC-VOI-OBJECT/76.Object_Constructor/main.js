
// Object constructor (xây dựng đối tượng)

// tạo bản thiết kế

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

}
var author = new User('Son', "Danh", "Avatar");
var user = new User('Vu', "Nguyen", "Avatar");

console.log(author);
console.log(user);
