// Built in Constructors
// String

const name1 = 'uzo';
const name2 = new String('uzo');

// name2.car = 'RR cullinan';
// console.log(name2);

console.log(typeof name2);

if(name2 === 'uzo'){
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 4;
const num2 = new Number(4);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y){
  return x + y
}

const getSum2 = new Function('x','y', 'return 1 + 1');

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

//  Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);