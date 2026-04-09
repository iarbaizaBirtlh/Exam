const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let listaCompras = [];

function menu() {
    console.log("*** Lista de compras ***");
    console.log("Pulsa 'A' para añadir productos");
    console.log("Pulsa 'D' para eliminar el último producto");
    console.log("Pulsa 'S' para salir");

    rl.question("Elige una opción: ", (opcion) => {
        switch (opcion.toUpperCase()) {
            case "A":
                anadirProductos();
                break;
            case "D":
                eliminar();
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

function anadirProductos() {
    console.log("\nModo añadir (escribe 'SALIR' para terminar): ");
    pedirProductos();
}

function pedirProductos()  {
    rl.question("Intoduce un producto: ", (producto) => {
        if (producto.toUpperCase() === "SALIR") {
            let result;
            console.log("\n Lista final de los productos: ");
            if (listaCompras.length > 0) {
                result = listaCompras;
            } else {
                result = "La lista está vacía.";
            }
            console.log(result);
            menu();
        } else {
            listaCompras.push(producto);
            console.log(`Producto añadido: ${producto}`);
            anadirProductos(); 
        }
    });
}

function eliminar() {
    if (listaCompras.length > 0) {
        let eliminar = listaCompras.pop();
        console.log(`Producto eliminado: ${eliminar}`);
    } else {
        console.log("La lista está vacía, no hay nada para eliminar.");
    }
    menu();
}

menu();