/* setTimeout( ()=> {
  console.log("Hello");
  setTimeout( ()=> {
    console.log("Hey");
    setTimeout( ()=> {
      console.log("Namaste");
      setTimeout( ()=> {
        console.log("Hi");
        setTimeout(()=> {
          console.log("Bonjour");
        }, 2000);
      }, 2000)
    }, 2000);
  }, 2000);
}, 2000); */


//enhaced object literals 
//Object

/* const person = {
  sum: function(a,b){
    return a+b;
  },

  mul: function(a,b){
    return a*b;
  }
};

console.log(person.sum(11, 99));


setTimeout(function(){
  console.log(person.mul(11,99));
},4000); */

/* function getPerson(name, age, height){

  return {name, age, height};

}

console.log(getPerson('Yael', 22, 170)); */



/* 
function ratings(rate) {

  if(rate == 5){

    console.log(`High Ratings: ${rate}`);

  } else if(rate == 0){
    console.log(`Low Ratings: ${rate}`);
  }else{
    console.log(`There is not any answer: ${rate}`);
  }
}

//ratings(5);
ratings(2);
 */
/* 
function giveMe4(a,b,c,d){

  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
  
}

console.log(giveMe4(1, 11, 111, 1111));
 */

/* const peoples = ['Ana', 'Patricia', 'Claudio'];

const allPeoples = ['Esteban', ...peoples, 'Jose'];

console.log(allPeoples); */


//spread operator ...

/* const student = {

    name: 'Pepe',
    age: 21,
    gender: 'male'

}

const newStudent = {...student, address:'Main route', phoneN: '123456'};
console.log(newStudent);


 */

/* let arr = [1, 2, 3];
let arr2 = [4, 5];

const user = {
  name: 'Jen',
  age: 22,
};

const arr3 = [...arr, ...arr2]
console.log(arr3);

//...
 */
/* function person(firstName, lastName, ...hobbies){

  console.log(`Nombre: ${firstName}`);
  console.log(`Apellido: ${lastName}`);
  console.log(`Hobbies ${hobbies}`);

}

person('Jose', 'WebDev', 'programming', 'running', 'playing video games');


 */

/* const myArray = ['name', age, 'gender'];
//desestructurar
const [name, age, gender] = myArray; */

/* function test() {

  return [a,b];

} */
//Des-estructurar
/* 
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

const [color1, color2, color3] = colors;

console.log(color1, color2, color3); */


/* let options = ['Beauty Therapist', 'Financial Adviser', 'Life Coach', 
'Software Engineer'];

//Desestructurar 

let [option1, option2] = options; 

console.log(option1, option2); */

/* const student = { 

  name: 'Pablo',
  position: 'Junior',
  phone: 75856377
 */


// des estructurar el Object 

/* const { 

  name,
  position,
  phone,

} = student;

console.log('name');
console.log('position');
console.log('phone');

 */

//create an object 
/* 
const student = {name:'Jose', position: 'Junior', age:42};

const { name: candidate, position, age } = student;

console.log(`${candidate} tiene ${age} `);
 */

/*your task is to destruct this object, 

  to extract the name, age and country propertis 
  to log each variable's value to the console

*/

/* const person = {

  name: 'Jose',
  age: 42,
  gender: 'male',
  country: 'Ethiopia'

};

const { name, age, country} = person;
console.log(`Student: ${name} and his age: ${age}, he lives in ${country}!`); */
/* 

const num = { x: 100, y: 200};

//renaming 

const {x: newX, y: newY } = num;
console.log(newX);
console.log(newY);
 */

//Object des-estructuring and rest operator 
/* 
let { a, b, ...rest} = { a:100, b:200, c:300, d:400, e:500};

console.log(rest);

 */

//object destructuring 

/* const person = {

  name: 'Jose Bellorin',
  age: 30,
  gender: 'male',
  country: 'Bolivia',

};

const {name:personName, age:personAge, country:personCountry} = person; 

console.log(personName);
console.log(personAge);
console.log(personCountry); */

/* const person = {

  name: 'Robert',
  age: 22,
  country: 'USA',

};


function printPersonInfo(person){

    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Country: ${person.country}`);

}

printPersonInfo(person);
 */

/* const age = 25;

const isAdult = age >= 18 ? 'Adult' : 'Not an Adult';

console.log(isAdult); */


/* let tuEdad = prompt('Que edad tienes ? '); 

//Operador ternario

tuEdad >=18 ? console.log('Eres mayor de edad!') : console.log('Eres menor de edad!');

 */


/* let person = {

  name: 'Jose',
  age: 42,
  gender: 'male',

};

for (let keys in person){

    console.log(keys);

} */

/* function passwordChecker(){

  let password = prompt('Registra tu clave: ');

  (password.length >=8)  &&  /[A-Z]/.test(password) ?  console.log('It is strong') : console.log('It is weak');

}; 

passwordChecker(); */
/* 
  let clave = prompt('Registre su password: ');

  if (clave.length >=8){
    return `Your password is strong.`;
  }else {

   return `Your password is not strong.`;

  }

}

passwordChecker();
 */


/* const age = prompt('Registra tu edad: ');

const isAdult = age >=18 ? `You're an Adult` : `You're not`;

console.log(isAdult);

 */


//If a person have money can 'buy products'
//If a person don't have money, 'they should bring money'

/* const haveMoney = prompt('Do you have some money with?').toUpperCase();

const action = haveMoney === 'YES' ? `buy some products` : `Bring some money`;

console.log(action);
 */

/* let person = {
  name: 'Jose',
  age: 19,
  gender: 'male'
};


for (let keys in person){

  console.log(keys, person[keys]);

}


 */

/* let myArray = ['One', 'Two', 'Three', 'Four'];

for (let index in myArray){

  console.log(index, myArray[index]);
/* 
}
 */

/* 
const object = {

  a: 1,
  b: 2,
  c: 3

};

for (const keys in object){

  console.log(`${keys}: ${object[keys]}`);

}
 */ 

/* let peoples = ['Ana', 'Rey', 'Jose', 'Berta'];

for (let person of peoples){
   console.log(person);
} */

/* const text = 'Antonio';

for (const char of text) {
  
    console.log(char);
}
 */


/* const array1 = ['a', 'b', 'c'];

for(const element of array1){

    console.log(`${element}`);

}
 */

//forEach 

/* let person = { 

  name:'Jose',
  age: 42,
  gender: 'male',

};

for (let key in person){

    console.log(key, person[key]);

}
 */

/* 
let list = [ 'one', 'two', 'three', 'four']

for (let index in list){

  console.log(`${index}: ${list[index]}`);

} */


/* const object = {a:1, b:2, c:3};

for(const properties in object){

  console.log(`${properties}: ${object[properties]}`);

}
 */

// for ...of (direct to the values)
//let peoples = ['Jose', 'Alex', 'Enver', 'Daniel'];

/* for(let people of peoples){

  console.log(peoples);

} */
/* 
const text = 'Venezuela'

for (const char of text){
    console.log(char);
}
 */



/* const array1 = ['a', 'b', 'c'];

for (const element of array1){
    console.log(element);
}
 */
/* 

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

function nombreFuncion(number){
  sum += number;
}

numbers.forEach(nombreFuncion);
console.log(sum);
 */

/* let numbers = [1, 2, 3, 4];

let double = numbers.map((number)=> number*2);

console.log(double);
 */

/* let amounts = [ 120, 55, 200, 50];

let monto = amounts.map( (amount) => amount*7.2 );

console.log(`${monto} Bolivianos`); */

//we have an array and inside this array we have different objects
//different properties and values
/* let peoples = [

     {firstName: 'Enmanuel', lastName: 'Macron'},

     {firstName: 'Benjamin', lastName: 'Netanyahu'},

     {firstName: 'Vladimir', lastName: 'Putin'},
]

let results = peoples.map(person => {
  return [person.firstName, person.lastName]}
  );

  console.log(results);
 */


//Create an array with random numbers.
//Map over each item in that array and multiply each item by 10

/* const myArray = [22, 11, 44, 77];

function myFunction(element){

  return element*10;

}

const newArray = myArray.map(myFunction);

  console.log(newArray); */

/* const songs = [

  { name: 'Happy Land', duration: 3.40 }, 

  { name: 'Green Forest', duration: 2.45 },

  { name: 'Ocean Drive', duration: 1.52 },

  { name: 'always', duration: 2.36 },

];

console.log(songs.filter(song => song.duration > 3)); */

/* const computers = [

	{ram: 8, hdd: 250 }, 
	{ram: 16, hdd: 500 }, 
	{ram: 32, hdd: 1000 }, 
	{ram: 8, hdd: 1000 }, 

];

console.log(computers.filter(com => com.ram < 16)); */

/* const edades = [ 32, 20, 51, 15];

function esAdulto(edad){

  return edad >= 18;

}

const resultado = edades.filter(esAdulto);
console.log(resultado); */


/* const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

function mayor6(word){

  return word.length > 6;

}

const newArray = words.filter(mayor6);

console.log(newArray);


 */
/* 
const posts = [
  {id: 1, content: 'Test'},
  {id: 2, content: 'Practice'},
  {id: 3, content: 'Social'},
];

const postRes = posts.find((post) => post.content == 'Social');
console.log(postRes);
 */


/* const computers = [

  { ram: 4, hdd: 100},
  { ram: 8, hdd: 200},
  { ram: 16, hdd: 300},
  { ram: 32, hdd: 400},

];

console.log(computers.filter(com => com.ram > 16));

 */


//Print only those words which length is greater than 6
/* const words = [

  'spotify', 
  'phone',
  'market',
  'clock',
  'praying',
  'holidays',

];

const results = words.filter( word => word.length > 6);
console.log(results);


 */

/* const peoples = [

  { name: 'Jose', age: 17},
  { name: 'Ana', age: 31},
  { name: 'Luis', age: 22},
  { name: 'Jose', age: 15}, 

];

const result = peoples.find(person => person.name == 'Jose');
console.log(result);
 */

/* const ages = [31, 10, 18, 20];

const greater18 = ages.find( age => age>18);
console.log(greater18);
 */

/* const peoples = ['Ray', 'Shaila', 'Carlos', 'Alex'];
const res1 = peoples.every( person => person.length <6);
const res2 = peoples.some( person => person.length < 6);
console.log(res1);
console.log(res2);
 */

/* const songs = [

  { name: 'Lucky you', duration: 2.40 },
  { name: 'Remind me', duration: 1.56 },
  { name: 'Stateless', duration: 3.36 },
  { name: 'New World', duration: 2.52 },

];

const everyRes = songs.every(song => song.duration > 3)
const someRes = songs.some(song => song.duration > 3);

console.log(everyRes);
console.log(someRes);


 */
/* 
const numbers = [1,2,3,4,5]

const sum = numbers.reduce((p, c) => {

  return p + c

}, 0)
console.log(sum)

 */

/* const peoples = [

  {

    name: 'Alex Randall',
    age: 23,

  },

  {

    name: 'Sophie Crusell',
    age: 21,

  },

  {

    name: 'George Nieto',
    age: 35,

  }

] */

// .reduce() method

/* const oldestPerson = peoples.reduce( (c, p) => 

    (c.age > p ? c.age : p) ,0); 

console.log(oldestPerson);  */ 



// function .reduce();

/* const map = new Map();

const keyOne = 'string'
const keyTwo = {}
const keyThree = function(){}

map.set(keyOne, 'Value of key One');

map.set(keyTwo, 'Value of key Two');

map.set(keyThree, 'value of key Three');

console.log(map);
console.log(map.keys());



 */
/* 
mySet.add('people');
mySet.add('cars');
mySet.add('colors');


for (let item of mySet){
    console.log(item);
}

 */

/* console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.documentURI);
 */

/* const mySet = new Set();

mySet.add('apple');
mySet.add('orange');

/*  console.log(mySet.has('orange'));*/

/* mySet.delete('orange'); 
console.log(mySet);
 */

/* const letters = new Set();

letters.add('Marine');
letters.add('Sea');
letters.add('Ship');

/* console.log(letters); */

//Iterate with for ...of 

/* for (let value of letters){

  console.log(value);

}
 
 */
/* 
const h1= document.createElement('h1'); 
h1.textContent = 'Hello World';
console.log(h1);

const texto = document.createElement('textarea');
texto.textContent = 'Write here...';
console.log(texto);


 */














































