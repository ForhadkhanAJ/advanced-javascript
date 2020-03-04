//15.5 MAP, FILTER, FIND, SMART WAY TO RUN FOR LOOP
// //1(A)
// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i=0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// //1(B)
// const numbers = [3, 4, 5, 6, 7, 8];

// function square(element) {
//     return element * element;
// }

// numbers.map(function(element){
//     console.log(element);
// })

// //1(C)
// const numbers = [3, 4, 5, 6, 7, 8];

// function square(element) {
//     return element * element;
// }

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// //1(C)
// const numbers = [3, 4, 5, 6, 7, 8];

// function square(element) {
//     return element * element;
// }

// const result = numbers.map(function(element){
//     return element * element;
// })

// console.log(result);

//1(D)
// const numbers = [3, 4, 5, 6, 7, 8];

// const result = numbers.map(x=> x * x);
// console.log(result);

//1(E), Filter...
// const numbers = [3, 4, 5, 6, 7, 8];

// const bigger = numbers.filter(x=> x > 5);
// console.log(bigger);

// 1(F), Filter...
// const numbers = [3, 4, 5, 6, 7, 8];

// const bigger = numbers.filter(x=> x < 5);
// console.log(bigger);

// 1(G), Filter...
// const numbers = [3, 4, 5, 6, 7, 8];

// const bigger = numbers.filter(x=> x < 3);
// console.log(bigger);

// 1(H), filter er special version, find.
const numbers = [3, 4, 5, 6, 7, 8];

const bigger = numbers.filter(x=> x < 5);
const isThere = numbers.find(x => x > 5);
console.log(isThere);