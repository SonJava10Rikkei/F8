
// Cậu lệnh rẽ nhánh - Switch

var date = 3;

switch (date) {
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3:
        console.log('Hôm nay là thứ 3');
        break;
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
    default:
        break;
}

// truyền giá trị cho switch
// Nó có thể là 1 biến hoặc 1 chuỗi, số , hoặc là toán tử 1 biểu thức điều kiện
// Khi đó switch sẽ đc tính toán lấy giá trị của đối tượng truyền vào
// khi gặp break thì sẽ thoắt khỏi khối lệnh switch
//


switch (date) {
    case 2:
        console.log(' 2 Hôm nay là thứ 2');
        break;
    case 3:
        console.log(' 2 Hôm nay là thứ 3');
    // break;
    case 4:
        console.log(' 2 Hôm nay là thứ 4');
    // break;
    case 5:
        console.log(' 2 Hôm nay là thứ 5');
        break;
    default:
        console.log(" Không biết ");
        break;
}

// tính từ cái case nó đúng thì nó sẽ lọt vào tất cả các case sau đó

var date = 3;
switch (date) {
    case 2:

    case 3:

    case 4:
        console.log('   2 Hôm nay là thứ 2,3,4');
        break;
    case 5:
        console.log(' 2 Hôm nay là thứ 5');
        break;
    default:
        console.log(" Không biết ");
        break;
}

// Trong 1 vài trường hợp xử lý như in ra giống nhau ta có thể xét
// như trên

// Khi nào so sánh tính đúng sai thì nên dùng if else
// như toán tử  <  >  !==

// Còn những biến mà biết giá trị rồi thì nên sử dụng swich case
// (số case nên lớn hơn hoặc bằng 3 case)