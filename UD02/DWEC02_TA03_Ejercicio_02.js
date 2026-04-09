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

let usuario = new Usuario("Juan Etxebarria", 35, "juanEtxe@gmail.com");

function menu(){
    console.log("\n*** Gestión de Usuarios ***");
    console.log("Pulsa 'I' para mostrar la información del usuario");
    console.log("Pulsa 'C' para crear un nuevo usuario");
    console.log("Pulsa 'S' para salir");

    rl.question("Elige una opción: ", (opcion) => {
        switch (opcion.toUpperCase()) {
            case "I":
                usuario.mostrarInfo();
                rl.close();
                break;
            case "C":
                crearUsuario();
                break;
            case "S":
                console.log("Saliendo del programa.");
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                menu();
        }
    });
}

function crearUsuario() {
    rl.question("Introduce el nombre: ", (nombre) => {
        rl.question("Introduce el edad: ", (edad) => {
            rl.question("Introduce el email: ", (email) => {
                usuario = new Usuario(nombre, parseInt(edad), email);
                console.log("Nuevo usuario creado correctamente.");
                menu();
            });
        });
    });
}

menu();