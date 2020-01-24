import { calcularTotal } from './index';
import { equal } from "assert";

describe(('Cálculo del total'), () => {
  it('carrito vacío', () => { equal(calcularTotal([]), 0) })
  it('comprar pan', () => { equal(calcularTotal([{producto: "Pan", precio: 1, cantidad: 1}]), 1) })
  it('compar leche', () => { equal(calcularTotal([{producto: "Leche", precio: 1, cantidad: 1}]), 1) })
 })