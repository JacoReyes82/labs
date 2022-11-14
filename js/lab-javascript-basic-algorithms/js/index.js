console.log("I'm ready!");


// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name. 

let hacker1 = 'Jean Carlos';

// 1.2 Print "The driver's name is XXXX".

console.log(`"The driver's name is ${hacker1}"`);

// 1.3 Create a variable hacker2 with the navigator's name.

let hacker2 = 'Enmanuel';

// 1.4 Print "The navigator's name is YYYY".

console.log(`"The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    }
    else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    }
    else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
    }

// Iteration 3: Loops

let newHacker1 = ""; // Inicializo una nueva variable vacia, donde se almacenara el nuevo nombre separado.
for (let i = 0; i < hacker1.length; i++) {
    newHacker1 += hacker1[i].toUpperCase() + " "; // Con este ciclo for recorro toda el nombre, convierto en mayuscula y asigno un espacio en blanco.    
}
console.log(newHacker1); 

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function invertirNombre(nombre) {
    return nombre.split("").reverse().join("");
}
console.log(invertirNombre("Enmanuel"));

// 3.3 Depending on the lexicographic order of the strings, print: 

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
    }
    else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
    }
    else {
    console.log("What?! You both have the same name?")
    }