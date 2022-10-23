// Variables globales
let pagoTotal = 0;
let valorTicket = 200;
let valorCategoria = 0;
// Selectores
const formulario = document.querySelector("#formulario");
const pago = document.querySelector("#pago");

// Evento del formulario
formulario.addEventListener("submit", (e) => {
  // evitando el comportamiento por defecto del evento
  e.preventDefault();
  // obteniendo los valores de los inputs de cantidad y categoria del form
  const cantidad = document.querySelector("#cantidad").value;
  const categoria = document.querySelector("#categoria").value;

  // función para calcular el valor del resumen y mostrarlo en el DOM
  const calculaResumen = valorCategoria => {
    pagoTotal = cantidad * valorTicket * valorCategoria;
    pago.textContent = `Total a Pagar: $${pagoTotal}`;
  }

  // resolviendo con if sin else, cortando la ejecución con return
  if (categoria === "Estudiante") {
    valorCategoria = 0.2; // 80% de descuento
    calculaResumen(valorCategoria);
    return;
  }
  if (categoria === "Trainee") {
    valorCategoria = 0.5; // 50% de descuento
    calculaResumen(valorCategoria);
    return;
  }
  if (categoria === "Junior") {
    valorCategoria = 0.85; // 15% de descuento
    calculaResumen(valorCategoria);
    return;
  }

});
