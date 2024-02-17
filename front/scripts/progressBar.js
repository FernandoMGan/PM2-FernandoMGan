//  Rutinas y Funciones de componentes UX/UI ( Barra de Progreso )
document.addEventListener("DOMContentLoaded", function () {
    //     event.preventDefault(); // Previene la acción por defecto del enlace
});

// Definición de la clase Progreso para representar una barra de progreso
class Progreso {
    constructor(referencia = {}) {
        this.id = 0;
        this.referencia = referencia;
        this.leyenda = referencia.descripcion;
        this.minimo = referencia.minimo;
        this.maximo = referencia.maximo;
        this.valor = referencia.valorInicial;
        this.percent = 0;
    }

    // Función para configurar los valores de la barra de progreso
    ProgresoSetting() {
        this.id = 1;
        // this.referencia.progBarCntd.classList.remove('hidden');
    }

    // Función para reflejar el progreso en la barra de progreso
    ProgresoReflejo(valor) {
        this.valor = valor;
        this.percent = calcularPorcentaje(this.minimo, this.maximo, this.valor);
        this.leyenda = `${this.referencia.descripcion} ( ${this.percent} % ).`;

        // Reflejar el valor en el ancho del componentePorcentaje
        if (this.percent <= 99) {
            this.referencia.progBarPrc.style.width = (this.percent) + "%";
        }

        // Reflejar la leyenda en el componenteLeyenda
        this.referencia.progBarLey.innerHTML = this.leyenda;

        if (this.valor == this.maximo) {
            // this.referencia.progBarCntd.classList.add('hidden');
        }
    }
}

function calcularPorcentaje(minimo, maximo, posicion) {
    // Calcular la diferencia entre el valor máximo y mínimo
    const rango = maximo - minimo;
    // Calcular la posición relativa dentro del rango
    const posicionRelativa = posicion - minimo;
    // Calcular el porcentaje
    const porcentaje = (posicionRelativa / rango) * 100;
    return porcentaje.toFixed(2); // Redondear el porcentaje a 2 decimales
}

// Exportar la clase Progreso
module.exports = { Progreso };

