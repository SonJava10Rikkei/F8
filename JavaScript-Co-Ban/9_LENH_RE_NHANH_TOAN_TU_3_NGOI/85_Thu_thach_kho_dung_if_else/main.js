function run(a) {
    if (a % 3 == 0 && a % 5 != 0) {
        return 1;
    } else if (a % 5 == 0 && a % 3 != 0 && a % 15 != 0) {
        return 2;
    } else if (a % 15 == 0) {
        return 3;
    }
}

console.log(run(3)); // log = 1
console.log(run(5)); // log = 2
console.log(run(15)); // log = 3
