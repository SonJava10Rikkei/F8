// Làm bài
function getCanVoteMessenge(age) {

    return age >= 18 ? "Bạn có quyền bỏ phiếu" : "Bạn chưa có quyền bỏ phiếu";

}

console.log(getCanVoteMessenge(18)); // Bạn có quyền bỏ phiếu 
console.log(getCanVoteMessenge(15)); // Bạn chưa có quyền bỏ phiếu