function generarTarjetas(param) {
    const contenedorTarjetas = document.querySelector(".cntd-trjs");

    if (param === 'mispeliculas') {
        vDinData = tempData;
    } else if (param === 'recomendadas') {
        vDinData = tempRecomendadas;
    }
    
    limpiarTarjetas();

    vDinData.forEach((pelicula) => {
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
    });
}

function limpiarTarjetas() {
    const contenedorTarjetas = document.querySelector(".cntd-trjs");
    contenedorTarjetas.innerHTML = ""; // Vacía el contenido del contenedor
}

document.addEventListener("DOMContentLoaded", function () {
    // Evento para el botón "misPeliculas"
    const misPeliculasBtn = document.getElementById("misPeliculas");
    misPeliculasBtn.addEventListener("click", function () {
        generarTarjetas('mispeliculas');
    });

    // Evento para el botón "recomendadas"
    const recomendadasBtn = document.getElementById("recomendadas");
    recomendadasBtn.addEventListener("click", function () {
        generarTarjetas('recomendadas');
    });
});

// console.log(tempData);
generarTarjetas('mispeliculas');


