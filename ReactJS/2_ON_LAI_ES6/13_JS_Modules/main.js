// Modules là tư tưởng mà khi chúng ta bóc tách ra,
// trong lập trình khi các bạn bóc tách ra xử lý một nghiệp vụ cụ thể
// ra một nơi riêng thì ta gọi là Module thường tách ra các file và tập hợp các file


// import/export

import logger from './app.js'
import {
    TYPE_WARN
} from './constants.js'
// console.log(logger);
// console.log(typeof logger);
// logger('Test Message...', 'error'); // kiểu lỗi
// logger('Test Message...', 'warn'); // Kiểu cảnh báo

console.log("***************************");

// logger('Test Message...', TYPE_LOG);
// logger('Test Message...', TYPE_ERROR);
logger('Test Message...', TYPE_WARN);
// logger('Test Message...', TYPE_INFO);
console.log("***************************");





