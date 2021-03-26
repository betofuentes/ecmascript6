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