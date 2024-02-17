const { Progreso } = require('./progressBar.js');
const { movie } = require('./movie.js');
const { RepoMovies } = require('./repoMovies.js');
const { tempRecomendadas } = require('./tempData.js');

// console.log(`Cantidad de Items cargados en tempRecomendadas - Antes  ${tempRecomendadas.length}`);

// Seteos de limites de barra de progreso
const ProgBarRef = {
    "progBarCntd": document.getElementById('prog-bar-cntd'),
    "progBarFndo": document.getElementById('prog-bar-fndo'),
    "progBarPrc": document.getElementById('prog-bar-prc'),
    "progBarLey": document.getElementById('prog-bar-ley'),
    "descripcion": "Cargando Sitio",
    "minimo": 1,
    "maximo": tempRecomendadas.length,
    "valorInicial": 1,
};

const progbar = new Progreso(ProgBarRef, null, 1, tempRecomendadas.length);
const repMovies = new RepoMovies();

const progBarDraw = document.getElementById('prog-bar-cntd')
progBarDraw.classList.remove('hidden');
repMovies.limpiarTarjetas();
bucle(0)

function bucle(index) {
    if (index < tempRecomendadas.length) {
        // console.log(`DevFlgs -index.js. - Valores Minimo ${progbar.minimo}, Maximo ${progbar.maximo} index es ${index} - Equivale al ${progbar.percent} % `);

        // Obtener el objeto de película actual
        const movieData = tempRecomendadas[index]; // Utiliza el índice correcto sin ajuste

        // Crear una nueva película utilizando el método createMovie()
        // console.log(movieData);
        // Si planeas usar RepoMovies.createMovie(movieData), deberías descomentar esta línea
        repMovies.createMovie(movieData);
        CreateDivs(movieData);

        // Actualizar la interfaz de usuario cada 10 milisegundos
        setTimeout(() => {
            bucle(index + 1);
            progbar.ProgresoReflejo(index);
        }, 10);
    } else {
        progBarDraw.classList.add('hidden');
        // console.log(`DevFlgs -index.js. - Fin Bucle `);
    }
}

function CreateDivs(pelicula) {
    // console.log(`DevFlgs -index.js. - Entrando a Div Trj Individual  ${progbar.percent} % `);

    const contenedorTarjetas = document.getElementById('cntd-trjs-ind');

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("cntd-trjs-ind");

    const titulo = document.createElement("div");
    titulo.classList.add("trj-ind");
    titulo.classList.add("trj-title");
    titulo.innerHTML = `<h4>Titulo: ${pelicula.title}</h4>`;
    tarjeta.appendChild(titulo);

    const imagen = document.createElement("div");
    imagen.classList.add("trj-ind");
    imagen.innerHTML = `<img src="${pelicula.poster}" height="300rem" alt="Imagen de ${pelicula.title}">`;
    tarjeta.appendChild(imagen);

    const director = document.createElement("div");
    director.classList.add("trj-ind");
    director.innerHTML = `<h5>Director: ${pelicula.director}</h5>`;
    tarjeta.appendChild(director);

    const duracion = document.createElement("div");
    duracion.classList.add("trj-ind");
    duracion.innerHTML = `<h5>Duracion: ${pelicula.duration}</h5>`;
    tarjeta.appendChild(duracion);

    const calificacion = document.createElement("div");
    calificacion.classList.add("trj-ind");
    calificacion.innerHTML = `<h5>Calificacion: ${pelicula.rate}</h5>`;
    tarjeta.appendChild(calificacion);

    contenedorTarjetas.appendChild(tarjeta);
};