// Se importan los módulos necesarios
const { Progreso } = require('./progressBar.js');
const { RepoMovies } = require('./repoMovies.js');
const { getFakeStoreProducts } = require('./prmPeliculas.js');
const { tstAynsAwait } = require('./prmTestAsyncAway.js');
const { lsp } = require('./index-abaut.js');

// Se obtiene la referencia al contenedor de la barra de progreso
const progBarDraw = document.getElementById('prog-bar-cntd');
progBarDraw.classList.remove('hidden');

// Se obtienen las películas ficticias del servidor
getFakeStoreProducts().then(dbPeliculas => {
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

    const progbar = new Progreso(ProgBarRef, null, 1, dbPeliculas.length);
    const repMovies = new RepoMovies();

    repMovies.limpiarTarjetas();
    bucle(0, dbPeliculas, progbar, progBarDraw);
})
.catch(error => {
    console.error('Error al cargar las películas:', error);
});

// Llamada a la función para probar async/await
tstAynsAwait();

// Llamada a la función lsp
lsp();

// Función para crear las tarjetas de las películas
function bucle(index, dbPeliculas, progbar, progBarDraw) {
    if (index < dbPeliculas.length) {
        const movieData = dbPeliculas[index];
        CreateDivs(movieData);
        setTimeout(() => {
            bucle(index + 1, dbPeliculas, progbar, progBarDraw);
            progbar.ProgresoReflejo(index);
        }, 10);
    } else {
        progBarDraw.classList.add('hidden');
    }
}

// Función para crear las tarjetas de las películas
function CreateDivs(pelicula) {
    const contenedorTarjetas = document.getElementById('cntd-trjs-ind');
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("cntd-trjs-ind");

    // Crear el contenedor del título y el botón de favorito
    const contenedorTituloYFavorito = document.createElement("div");
    contenedorTituloYFavorito.classList.add("titulo-y-favorito");

    // Crear el botón de favorito
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

    // Crear el enlace del título de la película
    const titulo = document.createElement("div");
    titulo.classList.add("trj-ind", "trj-title");
    const enlaceTitulo = document.createElement("a");
    enlaceTitulo.href = "#";
    enlaceTitulo.innerHTML = `<h5>${pelicula.title}</h5>`;
    titulo.appendChild(enlaceTitulo);
    contenedorTituloYFavorito.appendChild(titulo);
    tarjeta.appendChild(contenedorTituloYFavorito);

    // Crear la imagen de la película
    const imagen = document.createElement("div");
    imagen.classList.add("trj-ind", "trj-imagen");
    imagen.innerHTML = `<img src="${pelicula.poster}" alt="Imagen de ${pelicula.title}">`;
    tarjeta.appendChild(imagen);

    // Crear el contenedor flex para el director
    const cntdFlexDirector = document.createElement("div");
    cntdFlexDirector.classList.add("contenedor-flex");
    const director = document.createElement("div");
    director.classList.add("trj-ind", "trj-ind-titdet");
    director.innerHTML = `<h6>Director</h6>`;
    cntdFlexDirector.appendChild(director);
    const directorDsc = document.createElement("div");
    directorDsc.classList.add("trj-ind", "trj-ind-director");
    directorDsc.innerHTML = `<h5>${pelicula.director}</h5>`;
    cntdFlexDirector.appendChild(directorDsc);
    tarjeta.appendChild(cntdFlexDirector);

    // Crear el contenedor flex para la duración
    const cntdFlexDuration = document.createElement("div");
    cntdFlexDuration.classList.add("contenedor-flex");
    const duracion = document.createElement("div");
    duracion.classList.add("trj-ind", "trj-ind-titdet");
    duracion.innerHTML = `<h6>Duración</h6>`;
    cntdFlexDuration.appendChild(duracion);
    const duracionTime = document.createElement("div");
    duracionTime.classList.add("trj-ind", "trj-ind-duration");
    duracionTime.innerHTML = `<h5>${pelicula.duration}</h5>`;
    cntdFlexDuration.appendChild(duracionTime);
    tarjeta.appendChild(cntdFlexDuration);

    // Crear el contenedor flex para la calificación
    const cntdFlexRate = document.createElement("div");
    cntdFlexRate.classList.add("contenedor-flex");
    const calificacion = document.createElement("div");
    calificacion.classList.add("trj-ind", "trj-ind-titdet");
    calificacion.innerHTML = `<h6>Calificación</h6>`;
    cntdFlexRate.appendChild(calificacion);
    const rate = document.createElement("div");
    rate.classList.add("trj-ind", "trj-ind-Rate");
    const rateValue = parseFloat(pelicula.rate.$numberDecimal); // Convertir a número
    rate.innerHTML = `<h3>${rateValue}</h3>`;
    cntdFlexRate.appendChild(rate);
    tarjeta.appendChild(cntdFlexRate);

    contenedorTarjetas.appendChild(tarjeta);
}
