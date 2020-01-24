import { calcularTotal, calcularPeso } from './index';
import { equal } from "assert";

describe(('Cálculo del precio'), () => {
  it('carrito vacío', () => { equal(calcularTotal([]), 0) });
  it('comprar pan', () => { equal(calcularTotal([{producto: "Pan", precio: 1, cantidad: 1, peso: 0.25}]), 1) });
  it('compar leche', () => { equal(calcularTotal([{producto: "Leche", precio: 1, cantidad: 1}]), 1) });
  it('compar pan y leche', () => { equal(calcularTotal([{producto: "Pan", precio: 1,}, {producto: "Leche", precio: 1, cantidad: 1}]), 2) });
  it('compar huevos', () => { equal(calcularTotal([{producto: "Huevo", precio: 30, cantidad: 12}]), 360) });
 });

 describe(('Cálculo del peso'), () => {
  it('carrito vacío', () => { equal(calcularPeso([]), 0) });
  it('compar pan', () => { equal(calcularPeso([{producto: "Pan", precio: 1, cantidad: 1, peso: 0.25}]), 0.25) });
  it('compar pan, leche y huevos', () => { equal(calcularPeso([{producto: "Pan", peso: 250}, {producto: "Leche", peso: 1000}, {producto: "Huevo", cantidad: 12, peso: 100}]), 2450) });
 });