function calcularIMC() {
    document.getElementById("resultado").innerText = "Texto";
    const altura = document.getElementById("altura").value;
    document.getElementById("resultado").innerText = "adios";
    const peso = document.getElementById("peso").value;
    const imc = peso / (altura * altura);

    document.getElementById("resultado").innerText = `Tu IMC es: ${imc.toFixed(2)}`;
}
