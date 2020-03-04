//15.6 APPLY MAP, FILTER, FIND ON AN ARRAY OF OBJECTS
// //1(A)
// const students = [
//     {id: 21, name: 'Omar Sunny'},
//     {id: 17, name: 'Maannaaaaa'},
//     {id: 41, name: 'Moyouri'},
//     {id: 71, name: 'DeepJol'}
// ];

// const names = students.map( s => s.name);
// console.log(names);

// //1(B)
// const students = [
//     {id: 21, name: 'Omar Sunny'},
//     {id: 17, name: 'Maannaaaaa'},
//     {id: 41, name: 'Moyouri'},
//     {id: 71, name: 'DeepJol'}
// ];

// const names = students.map( s => s.name);
// const ids = students.map( s => s.id);
// console.log(ids);

// //1(C)
// const students = [
//     {id: 21, name: 'Omar Sunny'},
//     {id: 17, name: 'Maannaaaaa'},
//     {id: 41, name: 'Moyouri'},
//     {id: 71, name: 'DeepJol'}
// ];

// const names = students.map( s => s.name);
// const bigger = students.filter( s => s.id > 40);
// console.log(bigger);

//1(D)
const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 17, name: 'Maannaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
];

const names = students.map( s => s.name);
const biggerOne = students.find( s => s.id > 40);
console.log(biggerOne);

