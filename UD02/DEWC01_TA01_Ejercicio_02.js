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