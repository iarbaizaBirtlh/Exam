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
const numeroAleatorio = Math.floor(Math.random() * 2);

rl.question('Introduce un número: ', (numero) => {
    if (numero > numeroAleatorio) {
        console.log(`El ingresado es mayor`);
    } else if (numero < numeroAleatorio) {
        console.log(`El ingresado es menor`);
    } else {
        console.log('Has acertado!');
    }
    rl.close();
});
