// main.js

// Suponiendo que ya tienes esta variable global ventas
let ventas = JSON.parse(localStorage.getItem("ventas")) || [];

// Función para actualizar la tabla de ventas en pantalla
function actualizarTabla() {
  const tabla = document.getElementById("tabla-ventas");
  tabla.innerHTML = ""; // limpia la tabla

  ventas.forEach((venta) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${venta.producto}</td>
      <td>${venta.cantidad}</td>
      <td>${venta.precio}</td>
      <td>${venta.total}</td>
    `;
    tabla.appendChild(fila);
  });
}

// Función para borrar historial con confirmación
function borrarHistorial() {
  if (confirm("¿Estás seguro que quieres borrar el historial de ventas?")) {
    ventas = [];
    localStorage.removeItem("ventas");
    actualizarTabla();
  }
}

// Al cargar la página, mostrar las ventas guardadas
window.onload = function() {
  actualizarTabla();
};
