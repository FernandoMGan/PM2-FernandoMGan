//  Rutinas y Funciones de componentes UX/UI ( Barra de Progreso )
document.addEventListener("DOMContentLoaded", function () {
    var btnPrc = document.getElementById("btn-prc");
    var btnPrc100 = document.getElementById("btn-prc100");
    var btnPrc1000 = document.getElementById("btn-prc1000");

    btnPrc.addEventListener("click", function (event) {
        event.preventDefault(); // Previene la acción por defecto del enlace
        var valPos = document.getElementById('prc-value').value;
        // console.log(valPos);
        BarraProgresoSetting(1, 100, valPos, 'Carga de Testeo');
        BarraProgresoReflejo(valPos);
    });

    btnPrc100.addEventListener("click", function (event) {
        event.preventDefault(); // Previene la acción por defecto del enlace
        var valPos = document.getElementById('prc-value').value;
        BarraProgresoSetting(1, 100, valPos, 'Carga de Testeo');
        for (let index = valPos; index <= TstBarraProgreso.maximo; index++) {
            // console.log(`Dentro del for en 100 :> ${index}`);
            setTimeout(function() {BarraProgresoReflejo(index)},5000);
        }
    });

    btnPrc1000.addEventListener("click", function (event) {
        event.preventDefault(); // Previene la acción por defecto del enlace
        var valPos = document.getElementById('prc-value').value;
        BarraProgresoSetting(1, 1000, valPos, 'Carga de Testeo');
        for (let index = valPos; index <= TstBarraProgreso.maximo; index++) {
            // console.log(`Dentro del for en 1000 :> ${index}`);
            setTimeout(function() {BarraProgresoReflejo(index)},3000);
        }
    });
});

// Definición de la clase Movie para representar una película
class Progreso {
    constructor(id = 1, referencia = "", leyenda = "", minimo = 1, maximo = 100, valor = 1, percent =0) {
        this.leyenda = leyenda;
        this.minimo = minimo;
        this.maximo = maximo;
        this.valor = valor;
        this.percent = percent;
    }
}

// Funciones propias del funcionamiento
function BarraProgresoSetting(minimo, maximo, valor, referencia) {
    TstBarraProgreso.referencia = referencia;
    TstBarraProgreso.leyenda = '';
    TstBarraProgreso.minimo = minimo;
    TstBarraProgreso.maximo = maximo;
    TstBarraProgreso.valor = valor;
    TstBarraProgreso.percent = ((valor / maximo) * 100).toFixed(2);

    const progbar = document.getElementById('prog-bar-cntd');
    progbar.classList.remove('hidden');

    console.log('Valores del progreso en Settings :> ', TstBarraProgreso);
}

// Reflejo en la barra de progreso
function BarraProgresoReflejo(valor) {
    const componenteFondo = document.getElementById("prog-bar-fndo");
    const componenteLeyenda = document.getElementById("prog-bar-ley");
    const componentePorcentaje = document.getElementById("prog-bar-prc");

    TstBarraProgreso.valor = valor;
    TstBarraProgreso.percent = ((valor/TstBarraProgreso.maximo)*100).toFixed(2);
    TstBarraProgreso.leyenda = `${TstBarraProgreso.referencia} ( ${TstBarraProgreso.percent} % ).`;

    // Reflejar el valor en el ancho del componenteFondo
    componentePorcentaje.style.width = (TstBarraProgreso.percent-1) + "%";

    // Reflejar la leyenda en el componenteLeyenda
    componenteLeyenda.innerHTML = TstBarraProgreso.leyenda;

    if (TstBarraProgreso.valor==TstBarraProgreso.maximo){
        const progbar = document.getElementById('prog-bar-cntd');
        progbar.classList.add('hidden');
    }
    console.log('Valores del progreso en Seteo :> ', TstBarraProgreso);
}

// Definicion de instancias de las variables
const TstBarraProgreso = new Progreso();
