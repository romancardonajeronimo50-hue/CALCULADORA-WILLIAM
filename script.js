// Proyecto Rural - Lógica de cálculos
document.getElementById("formGanadero").addEventListener("submit", function(e) {
    e.preventDefault();

    const numVacas = parseInt(document.getElementById("numVacas").value);
    const litrosPorVaca = parseFloat(document.getElementById("litrosPorVaca").value);
    const precioPorLitro = parseFloat(document.getElementById("precioPorLitro").value);
    const gastosDiarios = parseFloat(document.getElementById("gastosDiarios").value);

    const produccionTotal = numVacas * litrosPorVaca;
    const ingresos = produccionTotal * precioPorLitro;
    const ganancia = ingresos - gastosDiarios;

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <h3>✨ Resultados ✨</h3>
        <p>Producción total: <strong>${produccionTotal.toFixed(2)} litros</strong></p>
        <p>Ingresos: <strong>$${ingresos.toFixed(2)}</strong></p>
        <p>Ganancia neta: <strong>$${ganancia.toFixed(2)}</strong></p>
    `;
});
