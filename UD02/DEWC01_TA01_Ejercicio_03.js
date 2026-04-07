const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el número máximo: ', (max) => {
    rl.question('Introduce el primer divisor: ', (div1) => {
        rl.question('Introduce el segundo divisor: ', (div2) => {
            const numMax = parseInt(max);
            const divisor1 = parseInt(div1);
            const divisor2 = parseInt(div2);

            for (let i = 1; i < numMax; i++) {
                if (i % divisor1 === 0 && i % divisor2 === 0) {
                    console.log("FizzBuzz");
                } else if (i % divisor1 === 0) {
                    console.log("Fizz");
                } else if (i % divisor2 === 0) {
                    console.log("Buzz");
                } else {
                    console.log(i);
                }
            }
            rl.close();
        });
    });
});
