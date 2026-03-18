// Estadísticas adicionales
const promedioProduccion = produccionTotal / numAnimales;
const rentabilidad = (ganancia / ingresos) * 100;

// Resultados en texto
resultadosDiv.innerHTML = `
    <h3>✨ Resultados ✨</h3>
    <p>Producción total: <strong>${produccionTotal.toFixed(2)} ${unidad}</strong></p>
    <p>Ingresos: <strong>$${ingresos.toFixed(2)}</strong></p>
    <p>Ganancia neta: <strong>$${ganancia.toFixed(2)}</strong></p>
    <hr>
    <p>Promedio por ${animalSeleccionado}: <strong>${promedioProduccion.toFixed(2)} ${unidad}</strong></p>
    <p>Rentabilidad: <strong>${rentabilidad.toFixed(2)}%</strong></p>
`;

// Gráfica con Chart.js
const ctx = document.getElementById("graficaResultados").getContext("2d");
new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Producción", "Ingresos", "Ganancia"],
        datasets: [{
            label: "Estadísticas Ganaderas",
            data: [produccionTotal, ingresos, ganancia],
            backgroundColor: ["#66bb6a", "#42a5f5", "#ff7043"]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: "Resultados en Gráfica" }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { precision: 0 }
            }
        }
    }
});