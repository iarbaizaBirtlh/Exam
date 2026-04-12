import { GastoCombustible } from "../model/gasto.model.js";
import { GASTOS_DB } from "../data/gasto.data.js";

var gastoAnual = {
    2015: 0,
    2016: 0,
    2017: 0,
    2018: 0,
    2019: 0,
    2020: 0
};

function almacenarGastos() {
    GASTOS_DB.forEach(gasto => {
        localStorage.setItem(String(gasto.id), JSON.stringify(gasto));
        const year = new Date(gasto.date).getFullYear();
        
        let totalAnterior = gastoAnual[year];
        if (totalAnterior === undefined) {
            totalAnterior = 0;
        }
        let nuevoTotal = totalAnterior + gasto.precioViaje;
        gastoAnual[year] = nuevoTotal;
    });

    for (const year in gastoAnual) {
        sessionStorage.setItem(year, gastoAnual[year].toFixed(2));
        const elemento = document.getElementById("gasto" + year);
        if (elemento)
            elemento.textContent = gastoAnual[year].toFixed(2);
    }
}

function procesarGasto(jsonNuevoGasto) {
    let data;
    if (typeof jsonNuevoGasto === "string") {
        data = JSON.parse(jsonNuevoGasto);
    } else {
        data = jsonNuevoGasto;
    }

    const gasto = new GastoCombustible(
        data.id,
        data.vehicleType,
        data.date,
        data.kilometers,
        data.precioViaje
    );

    localStorage.setItem(String(gasto.id), JSON.stringify(gasto));

    let gastoTexto = sessionStorage.getItem(new Date(gasto.date).getFullYear());
    if (!gastoTexto)
        gastoTexto = "0"; 

    let actual = parseFloat(gastoTexto);
    let nuevoTotal = actual + gasto.precioViaje;
    const year = new Date(gasto.date).getFullYear();
    sessionStorage.setItem(year, nuevoTotal.toFixed(2));

    const elementos = document.getElementById("gasto" + year);
    if (elementos)
        elementos.textContent = nuevoTotal.toFixed(2);

    const elementoLi = document.createElement("li");
    elementoLi.textContent = `(${year}) ${gasto.vehicleType} - ${gasto.precioViaje.toFixed(2)} €`;
    document.getElementById("expense-list").appendChild(elementoLi);
}

export const GastoService = { 
    almacenarGastos,
    procesarGasto
};
