/*
    Ejercicio 2: Adivina el Número (nivel intermedio)

    Objetivo: Implementar estructuras iterativas para controlar el flujo del programa.
    Descripción: Desarrolla un juego donde el programa genera un número aleatorio entre 0 y 1, y el
    usuario debe adivinarlo. El programa:

        1. Genera un número aleatorio entre 0 y 1 -> Math.random()
        2. Solicita al usuario que introduzca un número.
        3. Usa una estructura condicional if-else para informar si el número ingresado es mayor o
        menor que el generado. Informa también el número generado e ingresado coinciden
        4. Cierra el programa
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const numSecreto = Math.floor(Math.random() * 2);

function preguntar() {
    rl.question('Introduce un número: ', (num) => {
        const numUser = parseInt(num);

        if (numUser === numSecreto) {
            console.log(`Correcto!! El número secreto era ${numSecreto}.`);
        } else if (numUser > numSecreto) {
            console.log(`El número secreto es menor.`);
        } else if (numUser < numSecreto) {
            console.log(`El número secreto es mayor.`);
        } else {
            console.log('No es un número, introduce un número válido');
        }
        rl.close();
    });
}

preguntar();