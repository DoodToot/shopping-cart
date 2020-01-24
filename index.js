

/**
 * Cálculo del total de la compra.
 * 
 * @param {array de objetos} carrito 
 */
export function calcularTotal(carrito) {
  var total = 0;
  for (var i = 0; i<carrito.length; i++) {
    total += carrito[i].precio * carrito[i].cantidad;
  }
  return total;
}

// Pan (1) ->     1€
// Leche (1) ->   1€