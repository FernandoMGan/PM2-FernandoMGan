const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    LoguinName: String,
    Password: String,
    UserName: String,
    Email: String,
    Sec2FA: String,
    RegC: Date,
    RegU: Date,
    RegS: Number
});

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: mongoose.Types.Decimal128,
    poster: String
});

const User = mongoose.model('User', userSchema);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = {User, Movie};