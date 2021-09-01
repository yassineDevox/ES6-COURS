//const 
// const TAILLE = 40;
// TAILLE=34;

// var a=1;
// var b=2;

// if(b==0) alert('ERROR DIVISION')
// else {
//     let d = a/b
//     alert("d= "+d)
// }
// console.log(d) Error

// for(let i = 0; i < 6; i++){
//     console.log(i)
// }   
// console.log(i) Error

//----------- string literal
// let name = "John"
// // using normal quotes
// console.log("Hello "+name+", how are you ?");
// // using ES6 template literals
// console.log(`
// Hello ${name}, how are you ?
// `);

//------- teneray operator
// //program to check pass or fail 
// let marks = prompt ('Enter your marks:'); 

//  // check the condition
// let result = ( marks >=40 ) ? 'pass' : 'fail';
// console.log (`You ${result} the exam.`);


//--------- arrow funtions


// JavaScript (ES5)
// function multiply() { return 2 * 3; };
// ES6
const multiply= () => console.log(2 * 3) ;

//appel
multiply()

let sayHello = () => alert`Hello`;
let sayBye = () => alert`Bye`;
//sayHello(); // “Hello” will be alerted
// Let’s create a function that takes an argument and call it as if it was a function
let doSomething = param => {
    param();
};
//  Now any function we send to “doSomething()” function will be called right away
doSomething(sayHello); // “Hello” will be alerted
doSomething(sayBye); // “Bye” will be alerted