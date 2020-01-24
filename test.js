import { calcularTotal } from './index';
import { equal } from "assert";

describe(('Cálculo del total'), () => {
  it('carrito vacío', () => { equal(calcularTotal([]), 0) });
  it('comprar pan', () => { equal(calcularTotal([{producto: "Pan", precio: 1, cantidad: 1}]), 1) });
  it('compar leche', () => { equal(calcularTotal([{producto: "Leche", precio: 1, cantidad: 1}]), 1) });
  it('compar pan y leche', () => { equal(calcularTotal([{producto: "Pan", precio: 1,}, {producto: "Leche", precio: 1, cantidad: 1}]), 2) });
  it('compar huevos', () => { equal(calcularTotal([{producto: "Huevo", precio: 30, cantidad: 12}]), 360) });
 })