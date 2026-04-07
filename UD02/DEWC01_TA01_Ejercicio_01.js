/* 
    Ejercicio 1: 
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
