
/**
 * Cálculo del total de la compra.
 * 
 * @param {array de objetos} carrito 
 */

export function calcularTotal(carrito) {
  var totalPrecio = 0;
  for (var i = 0; i<carrito.length; i++) {
    if (carrito[i].cantidad) {
    totalPrecio += carrito[i].precio * carrito[i].cantidad;
  } else {
    totalPrecio += carrito[i].precio;
  }
  }
  return totalPrecio;
}

export function calcularPeso(carrito) {
  var totalPeso = 0;
  for (var i = 0; i<carrito.length; i++) {
    if (carrito[i].cantidad) {
    totalPeso += carrito[i].peso * carrito[i].cantidad;
  } else {
    totalPeso += carrito[i].peso;
  }
  }
  return totalPeso;
}

// Pan (1) ->         1€
// Leche (1) ->       1€
// Huevos (12) ->     0.30€