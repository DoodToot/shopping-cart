

/**
 * Cálculo del total de la compra.
 * 
 * @param {array de objetos} carrito 
 */
export function calcularTotal(carrito) {
  var total = 0;
  for (var i = 0; i<carrito.length; i++) {
    if (carrito[i].cantidad) {
    total += carrito[i].precio * carrito[i].cantidad;
  } else {
    total += carrito[i].precio;
  }
  }
  return total;
}
// Pan (1) ->         1€
// Leche (1) ->       1€
// Huevos (12) ->     0.30€