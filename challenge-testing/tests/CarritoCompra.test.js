const CarritoCompra = require("../index");

describe("La clase CarritoCompra", () => {
  it("CarritoCompra debe ser una clase", () => {
    expect(typeof CarritoCompra).toBe("function");
  });

  it("CarritoCompra tiene un método constructor", () => {
    expect(CarritoCompra.prototype.hasOwnProperty("constructor")).toBe(true);
  });

  it("CarritoCompra me tiene que devolver un array", () => {
    const newCarritoCompra = new CarritoCompra();
    expect(Array.isArray(newCarritoCompra.carrito)).toBe(true);
  });

  it("Debe tener implementado el método agregarProducto()", () => {
    const newCarritoCompra = new CarritoCompra();
    expect(newCarritoCompra.agregarProducto).toBeDefined();
  });

  it("Debe tener implementado el método	calcularTotal(): ()", () => {
    const newCarritoCompra = new CarritoCompra();
    expect(newCarritoCompra.calcularTotal).toBeDefined();
  });

  it("Debe tener implementado el método	aplicarDescuento(): ()", () => {
    const newCarritoCompra = new CarritoCompra();
    expect(newCarritoCompra.aplicarDescuento).toBeDefined();
  });
});
