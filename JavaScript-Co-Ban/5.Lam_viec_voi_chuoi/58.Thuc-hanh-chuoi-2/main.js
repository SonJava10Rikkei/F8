var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {  // tham số trong tham trị
    return str.split(", ");
}

// Expected results
console.log(strToArray(coursesStr))  // đối số

// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']