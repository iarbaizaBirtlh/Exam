const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Usuario {
    constructor(nombre, edad, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }

    mostrarInfo() {
        console.log("\n*** Información  del Usuario ***");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad:   ${this.edad}`);
        console.log(`Email:  ${this.email}`);
    }
}

let usuarios = [];

function start() {
    console.log("\n*** Gestión de Usuarios (JSON) ***");
    console.log("Introduce los datos de varios usuarios en formato JSON.")

    rl.question("\nIntroduce el JSON: ", (entradaJson) => {
        try {
            const datos = JSON.parse(entradaJson);
            usuarios = datos.map(d => new Usuario(d.nombre, d.edad, d.email));
            console.log("Usuario cargado correctamente.");
            buscarUsuario();
        } catch (error) {
            console.log('Error: El JSON no es válido.')
            start();
        }
    });
}

function buscarUsuario() {
    rl.question("\nIntroduce el nombre del usuario a buscar: ", (nombre) => {
        const encontrado = usuarios.find(encontrado => encontrado.nombre.toLowerCase() === nombre.toLowerCase());

        if (encontrado) {
            encontrado.mostrarInfo();
        } else {
            console.log(`No se encontró ningún usuario con el nombre "${nombre}".`);
        }
        rl.close();
    });
}

start();