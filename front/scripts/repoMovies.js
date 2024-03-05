import { Movie } from "./movie.js";

// Definición de la clase Repository para manejar el almacenamiento de películas
class RepoMovies {
    constructor() {
        this.movies = [];
    }

    // Método para agregar una nueva película al repositorio
    createMovie({ title, year, director, duration, genre, rate, poster }) {
        const newMovie = new Movie(title, year, director, duration, genre, rate, poster);
        this.movies.push(newMovie);
        // console.log(`Se cargo la movie items ${this.getMoviesCnt()}`);
        
    }

    // Método para obtener todas las películas almacenadas
    getMovies() {
        return this.movies;
    }

    // Método para obtener la cantidad de las películas
    getMoviesCnt() {
        return this.movies.length;
    }

    // Método para obtener una película específica en base a su posición en el array
    getMovie(posicion) {
        if (this.movies.length > 0 && posicion >= 0 && posicion < this.movies.length) {
            return this.movies[posicion];
        }
        return [];
    }
    setCleanMovies() {
        this.movies = [];
    }
    setArray(db) {
        // Recorrer el array tempRecomendadas
        for (let i = 0; i < db.length; i++) {
            // Obtener el objeto de película actual
            const movieData = db[i];

            // Crear una nueva película utilizando el método createMovie()
            this.createMovie(movieData);
        }
    }
    limpiarTarjetas(){
        console.log(this.movies.length);
        if (this.movies.length == 0 ) {return};
        const contenedorTarjetas = document.querySelector(".cntd-trjs");
        contenedorTarjetas.innerHTML = ""; // Vacía el contenido del contenedor
        repositorio.setCleanMovies();
        trjCargadas = 0;
        console.log(this.movies.length);
    };
}

export { RepoMovies };