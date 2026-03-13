// Diccionario de unidades según el animal
const unidadesPorAnimal = {
    vaca: "litros de leche",
    gallina: "huevos",
    cerdo: "kilos de carne",
    oveja: "litros de leche",
    cabra: "litros de leche",
    pato: "huevos",
    pavo: "huevos",
    conejo: "kilos de carne",
    caballo: "litros de leche"
};

let animalSeleccionado = "";

// Selección de animal
document.getElementById("formAnimal").addEventListener("submit", function(e) {
    e.preventDefault();
    animalSeleccionado = document.getElementById("animal").value;
    const animalDiv = document.getElementById("animalSeleccionado");

    if (animalSeleccionado) {
        const unidad = unidadesPorAnimal[animalSeleccionado];
        animalDiv.innerHTML = `<h3>Has seleccionado: ${animalSeleccionado} 🐾</h3>
                               <p>La producción se medirá en <strong>${unidad}</strong>.</p>`;

        // Cambiar etiquetas dinámicamente
        document.getElementById("labelProduccion").textContent = `Producción por ${animalSeleccionado} (${unidad}):`;
        document.getElementById("labelPrecio").textContent = `Precio por ${unidad}:`;
    }
});

// Calculadora Ganadera
document.getElementById("formGanadero").addEventListener("submit", function(e) {
    e.preventDefault();

    const numAnimales = parseInt(document.getElementById("numAnimales").value);
    const produccionPorAnimal = parseFloat(document.getElementById("produccionPorAnimal").value);
    const precioPorUnidad = parseFloat(document.getElementById("precioPorUnidad").value);
    const gastosDiarios = parseFloat(document.getElementById("gastosDiarios").value);

    const produccionTotal = numAnimales * produccionPorAnimal;
    const ingresos = produccionTotal * precioPorUnidad;
    const ganancia = ingresos - gastosDiarios;

    const unidad = unidadesPorAnimal[animalSeleccionado] || "unidades";

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <h3>✨ Resultados ✨</h3>
        <p>Producción total: <strong>${produccionTotal.toFixed(2)} ${unidad}</strong></p>
        <p>Ingresos: <strong>$${ingresos.toFixed(2)}</strong></p>
        <p>Ganancia neta: <strong>$${ganancia.toFixed(2)}</strong></p>
    `;
});
