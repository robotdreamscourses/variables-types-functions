// Data types

  // String: text/metin 'Hello World' "Hello World" `Hello World`
  const firstName = `John`;
  console.log(typeof firstName);

  // Number: rakam/sayi 1, 2, 3, 3.14, 0.5
  let age = 30;
  const pi = 3.14;
  console.log(typeof age, typeof pi);

  // Bigint: 900719925124740999n, 1n, 2n
  const bigNumber = 900719925124740999n;

  // Boolean: true false
  let isMarried = true;

  // Undefined: let a;
  let numberofChildren;

  // Null: let a = null;
  let car = null; // {}

  // Symbol: uniq let value = Symbol('hello');
  let idNo = Symbol('123213123213');

  // Object: key:value pairs
  let user = {name: 'John', age: 30, isMarried: true};

//------------------//

//Function Declaration (Named Function) 

  function sayHello(emoji, text ) {
    return console.log(emoji, text);
  }
  // output: 👋 Hello World
  // output: ❤️ Love World

  //calling a function
  sayHello('👋', 'Hello World');

  //parameters and arguments - namig convention
  function sayHello(param1,param2) {
    return param1, param2;
  }

//Function Expression (Anonymous Function)
const sayHello2 = function(emoji, text) {
  return console.log(emoji, text);
}
sayHello2('👋', 'Hello World');

//function calling order

//Arrow Function
const sayMyName = (name) => {
  alert(name);
  return console.log(name)
};
sayMyName('John');

//------------------//

//Scope and Arrow Function and var, let, const

let name2 = 'John';
function myName() {
  return console.log(name2);
}
myName();

function myMood(emoji, mood ) {
  return console.log(emoji, mood, name2);
}
myMood('👋', 'Hello World');

{
  let name = 'John';
  const hairColor = 'black';
}
console.log(hairColor);

//Console.log, window.alert, window.prompt, window.confirm - Browser API

//Return Statement

//Default Parameters

const userDetail = function(name, age, country='Turkey', isMarried = false) {
  return console.log(`Hello ${name}, you are ${age} years old. Live in ${country} and you are ${isMarried ? 'married' : 'not married'}`);
}
userDetail('John', 30);
//Hello John, you are 30 years old. Live in Turkey

//Rest Parameters
function sum(country, city, ...users) {
  console.log(country, city, users);
}
sum('TR','Istanbul','John', 30, 'Turkey', false, 'Jane', 25, 'USA', true, 'Mark', 40, 'Germany', true);
