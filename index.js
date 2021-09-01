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
// const multiply= () => console.log(2 * 3) ;

// //appel
// multiply()

// let sayHello = () => alert`Hello`;
// let sayBye = () => alert`Bye`;
// //sayHello(); // “Hello” will be alerted
// // Let’s create a function that takes an argument and call it as if it was a function
// let doSomething = param => {
//     param();
// };
// //  Now any function we send to “doSomething()” function will be called right away
// doSomething(sayHello); // “Hello” will be alerted
// doSomething(sayBye); // “Bye” will be alerted
//------------- Array functions ES6
const people = [{ name: 'Max' }, { name: 'Jack 😃' }, { name: 'Marry' }]
// JavaScript
// function findPerson(name) {
//     for (let i = 0; i < people.length; i++) {
//         let person = people[i]
//         if (person.name == name) {
//             return person
//         }
//     }
// }
// ES6
function findPerson(name) {
    return people.find(person => person.name == name)
}


// JavaScript
// function showEachOne(name) {
//     for (let i = 0; i < people.length; i++) {
//         alert(people[i].name)
//     }
// }

// ES6
const showEachOne =
    name => people.forEach(person => console.log(person.name));

// JavaScript
// function filterProducts() {
//     let cheapProducts = [];
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].price < 10) cheapProducts.push(products[i]);
//     }
//     return cheapProducts;
// }

// ES6
let products = [{name:"Milk",price:15}, {name:"Water", price:9}, {name:"Bread", price:5}];

const filterProducts = () => products.filter(product => product.name != "Milk");


///------ extraire toute les nom des produits ayant prix<10
function f1(){
    let cheaperNameProduct = []
    for (let i = 0; i < products.length; i++) {
        const p = products[i];
        if(p.price<10)
        {
            cheaperNameProduct.push(p.name)
        }
    }
    return cheaperNameProduct;
}

//ES6
let f1_ES6 = () => products
                        .filter(p=>p.price<10)
                        .map(p=>p.name+" dadzad")


const data = [5, 10, 15, 20, 25]
const res = data.reduce((total, currentValue) =>  total + currentValue)
console.log(res)// 75

console.log(findPerson("Jack"))
showEachOne();
// products = filterProducts()
// console.table(products)
// console.log(f1())
console.log(f1_ES6())



// destructuring 
let { address } = {address:{city:"New York", country:"USA"}};

let {city, country} = address;

console.log(city) // New York
console.log(country) // USA
