console.log("hello from external javascript");
// /**
//  * Example 1- Variable declaretion
//  */
var a;
console.log(a);
let c;
console.log(c);

/**
 * Example 2- "let"
 */
 let myNumber=10;
console.log(myNumber);

let myString;//declaration
myString="Hello from string";//assignment
console.log(myString);

myString= "new value for string";//reassignment
console.log(myString);

/**
 * Examole 3-"const"
 */
const myBoolean=false;
console.log(myBoolean);

/**
 * Challenges 1
 */

let myObject= {}
console.log(myObject);

/**
 * Challenges 1
 */
let x= 10
let y= true
const myObject1={
    a:x,
    b:y
}
console.log(myObject1);

x=20;
let anotherObject;
anotherObject={
    newA:x,
    b:y,
    c:myObject1
}
console.log(anotherObject);


newVariable=10;
console.log(newVariable);

newVariable=true;
console.log(newVariable);

newVariable={
    x:true,
    y:10
};
console.log(newVariable);

newVariable.y=20;
console.log(newVariable);

//this will break the code
//newVariable=null;
newVariable.x=false;
console.log(newVariable);


