//15.7 ARGUMENTS, ARRAY LIKE OBJECTS, LOG ALL ARRAY ELEMENTS
// //1(A), normal function
// function add(num1, num2) {
//     return num1 + num2;
// }
// const result = add (2, 3);
// console.log(result);

// //1(B), Arguments function...(torkatorki function)
// function add(num1, num2) {
//     return num1 + num2;
// }
// const result = add (2, 3, 5);
// console.log(result);

// //1(C), Arguments function check...(torkatorki function)
// function add(num1, num2) {
//     console.log(arguments);
//     return num1 + num2;
// }
// const result = add (2, 3, 5);
// console.log(result);

// //1(D), Arguments function solve...(torkatorki function)
// function add(num1, num2) {
//     console.log(arguments);
//     return num1 + num2 + arguments[2];
// }
// const result = add (2, 3, 5);
// console.log(result);

// //1(D), Arguments function solve2...(torkatorki function)
// function add(num1, num2) {
//     console.log(...arguments);
//     return num1 + num2 + arguments[2];
// }
// const result = add (2, 3, 5, 7);
// console.log(result);

//1(D), Arguments function (solve3, array banaite)...(torkatorki function)
function add(num1, num2) {
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
}
const result = add (2, 3, 5, 7);
console.log(result);



