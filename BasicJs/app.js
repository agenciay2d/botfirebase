// Variables
var x = 5;
var y = 6;
var z = x + y;

console.log("El valor es: "+z);

// Identificadores
/*
  Nombres letras, digitos, guiones bajos y  $
  Comenzar con una letra
  Pueden comenzar con $ y _
  Sensibles a mayus y minus
  No podemos usar como nombre una palabra reservada
*/

// Tipos de datos

var length = 16; // Numeros
var lastName = "Johnson"; //Strings
var x = {firstName: "Fer", lastName: "Ochoa"}; //Object

var a; // Undefined
a= 5;
console.log(a); // Numero

a = "Fer";
console.log(a); //String

//Comillas
var carName1 = "Volvo XC60"; //Comillas dobles
console.log(carName1);
var carName2 = 'Volvo XC60'; //Comillas simples
console.log(carName2);

var answer1 = "It's alright"; // Comillas dobles con comilla simple
console.log(answer1);
var answer2 = "He is called 'Fernando'"; //Comillas dobles con comillas simples
console.log(answer2);
var answer3 = 'He is called "Francisco"'; //Comillas simples con comillas dobles
console.log(answer3);

//Numeros
var x1 = 34.00; //Con decimales
console.log(x1);
var x2 = 34; // Sin decimales
console.log(x2);

var y = 123e5; //12300000
console.log(y);
var z = 123e-5; // 0.00123
console.log(z);

// Arrays    0         1      3
var cars = ["Ford", "Volvo", "BMW"];
console.log(cars[2]);

// Objetos
var person = {firstName: "Fer", lastName: "Ochoa", age:25, eyeColor: "Brown"};

// Template literals (${expresion})

let f = 'hola';
let b = 'mundo';
console.log('Mi primera aplicacion '+ f +' '+b);

let h = `Mi primera aplicacion ${f} ${b} con template literals`;
console.log(h);

// Funciones function (parameter1, parameter2){something}

function myFunction(p1, p2){
  return p1*p2;
}

var xa  = myFunction(4, 3);
console.log(xa);


function myFunction(a,b){
  return a-b;
}
var xb = myFunction(5, 8);
console.log(xb);
