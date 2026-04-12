/* 
    Ejercicio 1: Calculadora Básica (nivel principiante)

    Objetivo: Introducir variables, tipos de datos, operadores y estructuras condicionales.
    Descripción: Crea un programa en Javascript que funcione como una calculadora básica. El
    programa debe:

        1. Solicitar dos números al usuario.
        2. Solicitar el tipo de operación que desea realizar: suma, resta, multiplicación o división.
        3. Utilizar estructura condicional sqitch para determinar qué operación realizar
        4. Mostrar el resultado en la consola.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer número: ', (n1) => {
    rl.question('Introduce el segundo número: ', (n2) => {
        rl.question('Elige la operación (+, -, *, /): ', (operacion) => {
            const num1 = parseInt(n1);
            const num2 = parseInt(n2);
            let result;
            op = operacion;

            switch (op) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = "Error: No se puede dividir entre 0";
                    }
                    break;
                default:
                    result = "Operación no válida";
                    break;
            }
            console.log(`El resultado es: ${result}`);
            rl.close();
        });
    });
});
