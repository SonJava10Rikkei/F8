// Câu lệnh rẽ nhanh - If else

var date = 2;
if (date === 2) {
    console.log("Hôm nay là thứ 2");

}

if (date === 3) {
    console.log("Hôm nay là thứ 3");   // vẫn kiểm tra tiếp ko đúng ko in

}
if (date === 4) {
    console.log("Hôm nay là thứ 4");    // vẫn kiểm tra tiếp ko đúng ko in

}

// cách trên chưa tối ưu

// ==> gom thành 1 khối luôn luôn chỉ vào 1 nhánh đầu tiên là đúng và nó
// không kiểm tra nhánh đằng sàu nó nữa

var date = 9;
if (date === 2) {
    console.log("Hôm nay là thứ 2");

} else if (date === 3) {
    console.log("Hôm nay là thứ 3");
} else if (date === 4) {
    console.log("Hôm nay là thứ 4");
} else {
    console.log("không biết");
}



