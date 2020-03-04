//15.11 MODULE SUMMARY AND OVERVIEW
// //1(A)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(let i = 0; i < nums.length; i++){
//     console.log(nums[i]);
// }

// //1(B)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(let i = 0; i < nums.length; i++){
//     console.log(nums[i]);
//     if(nums[i] > 6){
//         break;
//     }
// }

// //1(C)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(let i = 0; i < nums.length; i++){
    
//     if(nums[i] > 3){
//         break;
//     }
//     console.log(nums[i]);
// }

// //1(D)
// const nums = [1, -2, 3, 4, -5, 6, 7, -8, 9]
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] < 0){
        // continue;
//     }
//     console.log(nums[i]);
// }

//1(E)
// const nums = [1, -2, 3, 4, -5, 6, 7, -8, 9]
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] < 0){
//         continue;
//     }
//     console.log(nums[i]);
// }

//final quiz
function hello(x, y=4) {
    console.log(y);   
}
hello(3,2);