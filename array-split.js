//15.10 ARRAY SLICE, SPLICE, ARRAY JOIN ELEMENTS
// //1(A)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);
// console.log(part);

// //1(B)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);
// console.log(part);
// console.log(nums);

// //2(A)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const removed = nums.splice(2, 5);
// console.log(removed);
// console.log(nums);

// //2(B)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const removed = nums.splice(2, 3, 77);
// console.log(removed);
// console.log(nums);

//2(C), (""), (" "), (","), ("ami") diye join kora jay
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const removed = nums.splice(2, 3, 77);
// console.log(removed);
// console.log(nums);

const together = nums.join("ami");
console.log(together);
