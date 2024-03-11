const { Progreso } = require('./progressBar.js');
const { RepoMovies } = require('./repoMovies.js');
const { getFakeStoreProducts } = require('./prmPeliculas.js');
const { tstAynsAwait } = require('./prmTestAsyncAway.js');
const { lsp } = require('./index-abaut.js');


const progBarDraw = document.getElementById('prog-bar-cntd');
progBarDraw.classList.remove('hidden');

getFakeStoreProducts().then(dbPeliculas => {
    // console.log('Get Fake Index');
    const ProgBarRef = {
        "progBarCntd": document.getElementById('prog-bar-cntd'),
        "progBarFndo": document.getElementById('prog-bar-fndo'),
        "progBarPrc": document.getElementById('prog-bar-prc'),
        "progBarLey": document.getElementById('prog-bar-ley'),
        "descripcion": "Cargando Sitio",
        "minimo": 1,
        "maximo": dbPeliculas.length,
        "valorInicial": 1,
    };

    // console.log(`Devolviendo Base de peliculas desde index.js :> Items Tot ( ${dbPeliculas.length} ) y Lista :> `, dbPeliculas);
    const progbar = new Progreso(ProgBarRef, null, 1, dbPeliculas.length);
    const repMovies = new RepoMovies();

    // Limpieza y carga de peliculas
    repMovies.limpiarTarjetas();
    bucle(0, dbPeliculas, progbar, progBarDraw);
})
    .catch(error => {
        // console.log(`Devolviendo Base de peliculas desde index.js :> Items Tot ( ${dbPeliculas.length} ) y Lista :> `, dbPeliculas);
    });

tstAynsAwait
lsp();

// Fin de Codigo ---------------------------------------------

function bucle(index, dbPeliculas, progbar, progBarDraw) {
    if (index < dbPeliculas.length) {
        const movieData = dbPeliculas[index];

        console.log(`Mostrar Peli posicion ${index} , con Titulo ${dbPeliculas[index].title} y con Ratio ${dbPeliculas[index].rate}`);

        // repMovies.createMovie(movieData);
        CreateDivs(movieData);

        setTimeout(() => {
            bucle(index + 1, dbPeliculas, progbar, progBarDraw);
            progbar.ProgresoReflejo(index);
        }, 10);
    } else {
        progBarDraw.classList.add('hidden');
    }
}

function CreateDivs(pelicula) {
    const contenedorTarjetas = document.getElementById('cntd-trjs-ind');

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("cntd-trjs-ind");

    // 1. Crear un div contenedor
    const contenedorTituloYFavorito = document.createElement("div");
    contenedorTituloYFavorito.classList.add("titulo-y-favorito");

    // Agregar el botón de favorito (corazón) al div contenedor
    const corazon = document.createElement("span");
    corazon.classList.add("bi", "bi-heart", "fs-2", "text-danger", "float-end", "me-5");
    corazon.setAttribute("data-favorito", "false");
    corazon.addEventListener("click", function () {
        const isFavorito = corazon.getAttribute("data-favorito") === "true";
        if (isFavorito) {
            corazon.classList.remove("bi-heart-fill");
            corazon.classList.add("bi-heart");
            corazon.setAttribute("data-favorito", "false");
        } else {
            corazon.classList.remove("bi-heart");
            corazon.classList.add("bi-heart-fill");
            corazon.setAttribute("data-favorito", "true");
        }
    });
    contenedorTituloYFavorito.appendChild(corazon);

    // 2. Agregar el título de la película dentro del div contenedor
    const titulo = document.createElement("div");
    titulo.classList.add("trj-ind");
    titulo.classList.add("trj-title");
    titulo.innerHTML = `<h5>${pelicula.title}</h5>`;
    contenedorTituloYFavorito.appendChild(titulo);

    // Agregar el div contenedor a la tarjeta
    tarjeta.appendChild(contenedorTituloYFavorito);

    const imagen = document.createElement("div");
    imagen.classList.add("trj-ind");
    imagen.classList.add("trj-imagen");
    imagen.innerHTML = `<img src="${pelicula.poster}" alt="Imagen de ${pelicula.title}">`;
    tarjeta.appendChild(imagen);

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // Crear el contenedor flex para la director
    const cntdFlexDirector = document.createElement("div");
    cntdFlexDirector.classList.add("contenedor-flex");

    const director = document.createElement("div");
    director.classList.add("trj-ind");
    director.classList.add("trj-ind-titdet");
    director.innerHTML = `<h6> director </h6>`;
    cntdFlexDirector.appendChild(director);

    const directorDsc = document.createElement("div");
    directorDsc.classList.add("trj-ind");
    directorDsc.classList.add("trj-ind-director");
    directorDsc.innerHTML = `<h5>${pelicula.director}</h5>`;
    cntdFlexDirector.appendChild(directorDsc);

    // Agregar el contenedor flex para la calificación a la tarjeta
    tarjeta.appendChild(cntdFlexDirector);
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    // Crear el contenedor flex para la duracion
    const cntdFlexDuration = document.createElement("div");
    cntdFlexDuration.classList.add("contenedor-flex");

    const duracion = document.createElement("div");
    duracion.classList.add("trj-ind");
    duracion.classList.add("trj-ind-titdet");
    duracion.innerHTML = `<h6> Calificacion </h6>`;
    cntdFlexDuration.appendChild(duracion);

    const duracionTime = document.createElement("div");
    duracionTime.classList.add("trj-ind");
    duracionTime.classList.add("trj-ind-duration");
    duracionTime.innerHTML = `<h5>${pelicula.duration}</h5>`;
    cntdFlexDuration.appendChild(duracionTime);

    // Agregar el contenedor flex para la calificación a la tarjeta
    tarjeta.appendChild(cntdFlexDuration);
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    // Crear el contenedor flex para la calificación
    const cntdFlexRate = document.createElement("div");
    cntdFlexRate.classList.add("contenedor-flex");

    const calificacion = document.createElement("div");
    calificacion.classList.add("trj-ind");
    calificacion.classList.add("trj-ind-titdet");
    calificacion.innerHTML = `<h6> Calificacion </h6>`;
    cntdFlexRate.appendChild(calificacion);

    const rate = document.createElement("div");
    rate.classList.add("trj-ind");
    rate.classList.add("trj-ind-Rate");
    const rateValue = parseFloat(pelicula.rate.$numberDecimal); // Convertir a número
    rate.innerHTML = `<h3>${rateValue}</h3>`;
    cntdFlexRate.appendChild(rate);

    // Agregar el contenedor flex para la calificación a la tarjeta
    tarjeta.appendChild(cntdFlexRate);
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    // Agregar la tarjeta al contenedor de tarjetas
    contenedorTarjetas.appendChild(tarjeta);
}