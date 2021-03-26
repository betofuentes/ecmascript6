//Nosotros podemos establecer ciertos valores pasados a una versión por defecto.

//Antes de es6
function newFunction(name, age, country) {
    var name = name || 'Beto';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Beto', age = 23, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo',22,'CL')

//Template literals
let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

//multilínea antes de ec6
let lorem = "Qui consequatur . Commodi. Ipsum vel duis yet minima  \n"
+ "otra frase que necesitamos"

//ec6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase épica`;

console.log(lorem)
console.log(lorem2)

let person = {
    "name": "Beto",
    "age": 32,
    "Country": "MX"
}

//Antes de ecs6
console.log(person.name, person.age);
//ecs6
let { name, age, country } = person;
console.log(name, age);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];