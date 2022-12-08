/**
 * Toán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. !  - Not
 */

var a = 1;
var b = 2;
var c = 3;

///////////     toán tử && - và     ///////////

// if (a > 0 && b > 0) {    // cả vế trái và vế phải đều đúng thì if in ra log
//     console.log('Điều kiện Đúng');
// }

// if (a > 0 && b < 0 && c > 0) {    // Chỉ cần 1 điều kiện sai thì không được thực hiện câu lệnh in ra nữa
//     console.log('Điều kiện Đúng');
// }

///////////     toán tử || - hoặc     ///////////

// if (a < 0 || b < 0 || c > 0) {    // Chỉ cần 1 điều kiện đúng thì câu lệnh sẽ được thực hiện
//     console.log('Điều kiện Đúng');
// }


///////////     toán tử ! - không     ///////////

if (!(a < 0)) {                         // không phải a < 0 thì là điều kiện đúng nên câu lệnh log được thực hiện
    console.log("1 Điều kiện đúng");
}

if (a != 1) {                          // a không bằng là điều kiện sai nên câu lênh log khôn được thực hiện
    console.log("2 Điều kiện đúng");
}

if (!(a > -1)) {
    console.log("3 Điều kiện đúng");
}