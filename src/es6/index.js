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


//Spread Operator (...)
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];


let education = ['David',...team1, ...team2 ];

console.log(education);

//let: variable que solo funciona en su scope
{
    var globalvar = "Global Var";
}

{
    let globallet = "Global Let";
    console.log(globallet);
}

console.log(globalvar);

//const: Variable constante, no se puede volver a asignar.
const a = 'b';
a = 'a';


let name = 'Beto';
let age = 23;
//ecs5
obj = {name: name, age: age};
//ecs6
obj2 = {name, age};
console.log(obj2);


//ARROW FUNCTIONS
const names = [
    {name : 'Beto', age: 23},
    {name: 'Yessica', age: 27}
]

let listOfNames = names.map(function (item){
    console.log(item.name);
})

//La asignación "=>" establece que es una función anónima.
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
    //bloque de código
}

const listOfNames4 = name => {
    //bloque de código
}

const square = num => num * num;

//PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey! promesa resuelta.')
        } else {
            reject('Oops!!');
        }
    });
}

//Clases
class calculator {
    //metodo constructor:
    constructor(){
        //asignación en scope global de dos variables.
        this.valueA = 0;
        this.valueB = 0;
    }
    //metodo sumar
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2))