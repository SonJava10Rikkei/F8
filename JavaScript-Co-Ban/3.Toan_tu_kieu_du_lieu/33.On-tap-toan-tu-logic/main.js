var a = true;
var b = false;
var c = a || b;
var d = a && b;

console.log(c, d)  // true false

// Giải thích
// Với toán tử hoặc(||), nếu xuất hiện ít nhất 1 vế bằng true thì kết quả trả về sẽ là true.

// Còn với toán tử và(&&), nếu xuất hiện ít nhất 1 vế bằng false thì kết quả trả về sẽ là false.