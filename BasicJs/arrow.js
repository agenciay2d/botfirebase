var numbers = [4,9,16,25];

function myFn() {
  console.log(numbers.map(Math.sqrt));
}

myFn();

//arrow (p1, p2,...pN)=> {statement}
// => equivalente a {return expression}
/*
Un parametro
(p1)=>{}  / p1=>{}

Sin parametros
algo()=>{}
*/

var helloFn =()=>{
  console.log('Hola con funciones arrow');
}

helloFn();

var helloFun = name=>{
  console.log(`Hola ${name} con funciones arrow`);
}

helloFun("Fer");

console.log(numbers.map(numbers => numbers.length));

var materiales = [
  'Hidrogeno',
  'Helio',
  'Litio',
  'Cromo'
];

console.log(materiales.map(materiales => materiales.length));
