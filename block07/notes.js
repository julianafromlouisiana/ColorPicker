// Pseudo-code
// Plain english describing the functionality/logic of program

// Recap data typs
// number, string, objects, undefines, null, arrays list of data, booleans true or false
//89
// "this is a string"
// undefined means no data has been set
// null means there is intentionally no data
// both poin to no data


//Variables
// two major ways to declare them (let/const)
// third var make sure legacy software still works on browsers
// let creates a variable that can be modified
// const creates a variable that cannot be modified
//moving bookes
// myvar acts like a label
let myvar = 8:
let mystring = "hello, world";e
// Contents in the books
console.log(mystring);
let mybool = true;


// Expresssions
// operators +,-,/,*,%,=,===,?,&&,||
console.log(8*5);
console.log(8(5-3));
console.log("3+9");
const expression = 2;
console.log(expression);
const quantity = "30";
console.log(quantity+50);
console.log(Number(quantity)+50);
console.log(Number("hello!");
console.log(+quantity+50);
// ternary operator any thing that can be evaluated
console.log(expression === quantity ? "they mathc!" : "they don't match!");
console.log(30 > 15 ? "it is greater" : "it is less than");
// ALL conditions must be true for AND
console.log(expression === quantity && 30 > 45 ? "this is true" : "this is false ") false
// ONLY ONE condition must be true for OR
console.log(expression === quantity || 30 > 45 ? "this is true" : "this is false ") true



// What is truth-y vs false-y?
// Booleans are the most basic form of logic
// Every literal in JS can be treated as a boolean


const anotherstr = "This is text!";
console.log(anotherStr ? "yes it is data" : "no it is false");
// Empty strings a re false-y

const anotherNum = 40;
console.log(anotherNum ? "yes it is data" : "no it is false") true-y

const anotherNum = 0;
console.log(anotherNum ? "yes it is data" : "no it is false") false-y



console.log(null ? "truthy" : "falsey"); false 
console.log(undefined ? "truthy" : "falsey"); false 

// Template literals?
// basic string
const ordinaryString = "Your Text Here";
const singleQuotesString = 'Yout "text" here!';
const templateLiteral = `Quantity: ${quantity}`;


// Errors
// They are one of the biggest parts of programming
// Even though they're red, they're your friend
console.log(myvar2);
console.log(myvar2.something); undefined
// this is where objects come in

let failedVar = ; 


