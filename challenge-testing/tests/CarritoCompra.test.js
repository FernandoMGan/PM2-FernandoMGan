const CarritoCompra = require("../index");

describe("Clase CarritoCompra", () => {
  it("CarritoCompra tiene que ser una clase", () => {
    expect(typeof CarritoCompra).toBe("function");
  });

  it("CarritoCompra tiene método constructor", () => {
    expect(CarritoCompra.prototype.hasOwnProperty("constructor")).toBe(true);
  });

  it("Debe tener implementado método calcularTotal(): ()", () => {
    const newCarritoCompra = new CarritoCompra();
    expect(newCarritoCompra.calcularTotal).toBeDefined();
  });
  
  it("CarritoCompra tiene que devolver un array", () => {
    const newCarritoCompra = new CarritoCompra();
    expect(Array.isArray(newCarritoCompra.carrito)).toBe(true);
  });

  it("Debe tener método agregarProducto()", () => {
    const newCarritoCompra = new CarritoCompra();
    expect(newCarritoCompra.agregarProducto).toBeDefined();
  });

  it("Debe tener método	aplicarDescuento(): ()", () => {
    const newCarritoCompra = new CarritoCompra();
    expect(newCarritoCompra.aplicarDescuento).toBeDefined();
  });
});
