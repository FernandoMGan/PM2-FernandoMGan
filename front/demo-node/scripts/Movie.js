class Movie {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }

    toString() {
        return ` .. Title: ${this.title},. Year: ${this.year}, Director: ${this.director}, Duration: ${this.duration}, Genre: ${this.genre}, Rate: ${this.rate}, Poster: ${this.poster}`;
    }
    toBloque() {
        return ` .. Title: ${this.title},. \n Year: ${this.year}, \n Director: ${this.director}, \n Duration: ${this.duration}, \n Genre: ${this.genre}, \n Rate: ${this.rate}, \n Poster: ${this.poster}`;
    }
}

module.exports = Movie;
