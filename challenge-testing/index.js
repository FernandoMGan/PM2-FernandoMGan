class Producto {
  constructor({ nombre, cantidad, precio, porcentaje }) {
    nombre, cantidad, precio, porcentaje;
  }
}

class CarritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto({ nombre, cantidad, precio, porcentaje }) {
    const newProd = new Producto(nombre, cantidad, precio, porcentaje);
    this.carrito.push(newProd);
  }

  calcularTotal() {
    // Calcular total del carrito de compras
    const total = 0;
    for (let i = 0; i < this.carrito.lengt; i++) {
      total += this.carrito.precio[i] * this.carrito.cantidad[i];
    }
    return total;
  }

  aplicarDescuento(porcentaje) {
    const descuento = 0;
  }
}

module.exports = CarritoCompra;
