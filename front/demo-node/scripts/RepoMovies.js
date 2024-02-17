const Movie = require('./Movie.js');

class MovieRepository {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    loadMovies(movieData) {
        for (let data of movieData) {
            const movie = new Movie(
                data.title,
                data.year,
                data.director,
                data.duration,
                data.genre,
                data.rate,
                data.poster
            );
            this.addMovie(movie);
        }
    }

    printMovies() {
        for (let movie of this.movies) {
            console.log(movie.toString());
        }
    }

    printMoviesBloque() {
        for (let movie of this.movies) {
            console.log(movie.toBloque());
        }
    }
    printChargedN(){
        console.log('La cantidad de peliculas es de :> ', this.movies.length) ;
    }

}

module.exports = MovieRepository;
