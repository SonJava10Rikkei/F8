
// Object trong Javascript

var myInfo = {
    name: 'Son Danh',
    age: 18,
    address: 'Ha Noi, VN',
};

// đưa 1 key và value mới vào object
// c1
// myInfo.email = 'sonjavan7@gmail.com';  // thêm key và value
// console.log(myInfo);
// // c2
// myInfo['password'] = '12345678';
// console.log(myInfo);

// lấy value ra ngoài
// cách 1

// console.log(myInfo.email);
// console.log(myInfo.name);

// // cách 2

// console.log(myInfo['age']);

// // khi lấy dữ liệu mà không có trong Object thì sẽ trả về undefined

// console.log(myInfo['country']);
// console.log(myInfo.country);


// var myKey = 'address';

// console.log(myInfo[myKey]);

/////////////////////////////////////////////////
// them 1 key hoặc định nghĩa 1 key ở trong object bằng 1 biến
var emailKey1 = 'email';
var myInfo1 = {
    name1: 'Son Danh',
    age1: 18,
    address1: 'Ha Noi, VN',
    [emailKey1]: 'son@gmail.com',
};

// console.log(myInfo1);

////////////////// cách xóa 1 cặp key value trong object ///////////////////////////
// c1
// delete myInfo1.name1;
// c2
// delete myInfo1['address1'];
// c3
delete myInfo1[emailKey1]
console.log(myInfo1);

////////////////// lưu value là 1 function ///////////////////////////

var myInfo2 = {
    name2: 'Son Danh',
    age2: 18,
    address2: 'Ha Noi, VN',
    getName: function () {
        return this.name2;
    }
};

console.log(myInfo2);

// lấy value

console.log(myInfo2.getName);
console.log(typeof myInfo2.getName);

// Để hiện ra function thì vẫn phải call function đó

console.log(myInfo2.getName());

////////////////// Gọi key sao cho đúng ///////////////////////////

// nếu key là 1 function thì cta gọi đó là Phương thức --> Method
// còn lại key ở object gọi là Thuộc tính --> property
