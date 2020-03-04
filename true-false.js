//15.2 TRUTHY AND FALSY VALUES
//1. Truthy values
// "0"
// " "
//[]
//{}
//........................
// 2. Falsy values
// 0
// ""
// undefined
// null
// NaN
// //1(A)
// const age = 4;

// if(age > 0){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //1(B)
// const age = 4;

// if(age){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //1(C)
// const age = -4;

// if(age){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //1(D)
// const age = 0;

// if(age){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //2(A)..
// const name = "Solaiman Khan";

// if(name.length > 0){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //2(B)
// const name = "Solaiman Khan";

// if(name.length){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //2(C)
// const name = "Solaiman Khan";

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //2(D), Javascript shudhu ("") dile, false dekhabe.
// const name = "";

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //2(E), Javascript, (" ") quotetion er moddhe white space dile true dekhabe.
// const name = " ";

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //2(F), Javascript, (" ") quotetion er moddhe white space dile true dekhabe.
// const name = "0";

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //3(A)
// let name;
// console.log(name);

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //3(B)
// let name;
// console.log(name);

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //3(C)
// let name = null;
// console.log(name);

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //3(D)
// let name = NaN;
// console.log(name);

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //3(E)
// let name = false;

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }


// //3(F)
// let name = [];

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

// //3(G)
// let name = {};

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

//3(H)
// let name = 'false';

// if(name){
//     console.log("Condition is true");
// }
// else{
//     console.log("Condition is false");
// }

//3(I)
let name = 0;

if(name || name == 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}