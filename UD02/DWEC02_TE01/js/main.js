import { GastoService } from "./service/gasto.service.js";

console.log("Fichero main.js cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
    GastoService.almacenarGastos();
    const form = document.getElementById("fuel-form");
    const boton = document.getElementById("toggle-mode-btn");
    let lastId = 18;
    let modoAutomatico = false;
    let intervaloAutomatico = null;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const tipo = document.getElementById("vehicle-type").value;
        const date = document.getElementById("date").value;
        const km = parseFloat(document.getElementById("kilometers").value);
        const precioViaje = parseFloat((km * 0.1).toFixed(2));
        const nuevoGasto = {
            id: ++lastId,
            vehicleType: tipo,
            date: new Date(date).toISOString(),
            kilometers: km,
            precioViaje: precioViaje
        };
        GastoService.procesarGasto(nuevoGasto);
        form.reset();
    });

    boton.addEventListener("click", () => {
        if (!modoAutomatico) {
            modoAutomatico = true;
            boton.textContent = "Cambiar a modo manual";
            // ----------------------------------------------- (! NO TOCAR ) ------------------------------------------------------
            let ultimoId = 18; // Último ID de tu lista inicial
            let segundos = 5;

            setInterval(() => {
                const vehiculos = ["moto", "furgoneta", "camion"];

                // función auxiliar para generar enteros aleatorios
                function randomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                // función para generar precio con decimales
                function randomPrecio(min, max) {
                    return (Math.random() * (max - min) + min).toFixed(2);
                }

                // generar fecha aleatoria entre 2015 y 2020
                const year = randomInt(2015, 2020);
                const month = randomInt(0, 11);      // Enero=0 ... Diciembre=11
                const day = randomInt(1, 28);        // usamos 28 para evitar problemas con febrero
                const fecha = new Date(year, month, day);

                // generamos el gasto
                ultimoId++;
                const gasto = {
                    id: ultimoId,
                    vehicleType: vehiculos[randomInt(0, vehiculos.length - 1)],
                    date: fecha.toISOString(),
                    kilometers: randomInt(20, 350),
                    precioViaje: parseFloat(randomPrecio(1, 60)) // precio aleatorio entre 1 y 60 €
                };

                // mostramos el gasto
                console.log("Nuevo gasto generado:", gasto);
                alert(`Nuevo gasto generado:\n${JSON.stringify(gasto, null, 2)}`);
                GastoService.procesarGasto(JSON.stringify(gasto));
            }, segundos * 1000);
        } else {
            modoAutomatico = false;
            boton.textContent = "Cambiar a modo automático";
            clearInterval(intervaloAutomatico);
            intervaloAutomatico = null;
        }
    });
});
