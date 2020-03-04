//15.8 SCOPE, BLOCK SCOPE, ACCESS OUTER SCOPE VARIABLE
// //1(A), normal, ok function.
// function sum(first, second){
//     let result = first + second;
//     return result;
// }
// const output = sum (3, 7);
// console.log(output);

// //1(B), beke boshbe, JavaScript, scope er baire gele.
// function sum(first, second){
//     let result = first + second;
//     return result;
// }
// const output = sum (3, 7);
// console.log(result);
// console.log(output);

// //1(C), thik hobe, JavaScript, scope er thakle.
// function sum(first, second){
//     let result = first + second;
//     console.log(result);
//     return result;
// }
// const output = sum (3, 7);

// console.log(output);

// //1(D), scope er baire thakle, use korte parba, atake global scope bole, function er vitore na thakle.
// let bonus = 20;

// function sum(first, second){
//     let result = first + second + bonus;
//     console.log(bonus);
//     return result;
// }
// const output = sum (3, 7);
// console.log(bonus);
// console.log(output);

// //1(E), scope er notun aro jinish astese, Zemon.
// let bonus = 20;

// function sum(first, second){
//     let result = first + second + bonus;
//     // console.log(bonus);
//     if(result > 9){
//         const mood = "Happy";
//         console.log(mood);
//     }
//     return result;
// }
// const output = sum (3, 7);
// // console.log(bonus);
// // console.log(output);

// //1(F), 2scope er notun aro jinish astese, Zemon.
// let bonus = 20;

// function sum(first, second){
//     let result = first + second + bonus;
//     // console.log(bonus);
//     if(result > 9){
//         const mood = "Happy";
//         console.log(mood);
//     }
//     console.log(mood);
//     return result;
// }
// const output = sum (3, 7);
// // console.log(bonus);
// // console.log(output);

// //1(G), 2scope er notun aro jinish astese, Zemon.
// let bonus = 20;

// function sum(first, second){
//     let result = first + second + bonus;
//     // console.log(bonus);
//     if(result > 9){
//         let mood = "Happy";
//         mood = "fishy";
//         mood = "funky";
//         mood = "cranky"; 
//         console.log(mood);
//     }
//     console.log(mood);
//     return result;
// }
// const output = sum (3, 7);
// // console.log(bonus);
// // console.log(output);

// //1(H), 3scope er notun aro jinish astese, Zemon.
// let bonus = 20;

// function sum(first, second){
//     let result = first + second + bonus;
//     // console.log(bonus);
//     if(result > 9){
//         var mood = "Happy";
//         mood = "fishy";
//         mood = "funky";
//         mood = "cranky"; 
//         // console.log(mood);
//     }
//     console.log(mood);
//     return result;
// }
// const output = sum (3, 7);
// // console.log(bonus);
// // console.log(output);

// //1(I), 4scope er notun aro jinish astese, Zemon.
// let bonus = 20;

// function sum(first, second){
//     let result = first + second + bonus;
//     // console.log(bonus);
//     if(result > 9){
//         var mood = "Happy";
//         mood = "fishy";
//         mood = "funky";
//         mood = "cranky"; 
//         // console.log(mood);
//     }
//     console.log(day);
//     var day= "friday";
//     return result;
// }
// const output = sum (3, 7);
// // console.log(bonus);
// // console.log(output);

// //1(J), 5scope er notun aro jinish astese, Zemon.
// let bonus = 20;

// function sum(first, second){
//     let result = first + second + bonus;
//     // console.log(bonus);
//     if(result > 9){
//         var mood = "Happy";
//         mood = "fishy";
//         mood = "funky";
//         mood = "cranky"; 
//         // console.log(mood);
//     }
//     var day= "friday";
//     console.log(day);
//     return result;
// }
// const output = sum (3, 7);
// // console.log(bonus);
// // console.log(output);

//1(K), 5scope er notun aro jinish astese, Zemon.
let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    // console.log(bonus);
    if(result > 9){
        var mood = "Happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky"; 
        // console.log(mood);
    }
    console.log(day);
    let day= "friday";
    return result;
}
const output = sum (3, 7);
// console.log(bonus);
// console.log(output);

