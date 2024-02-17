const axios = require('axios');
const md5 = require('md5');
const MovieRepository = require('./RepoMovies');

function getMarvelPelis(repository) {
    console.log('antes de promesa de carga :> Pasando por Get Marvels');
}
// function getMarvelPelis(repo) {
//     return new Promise((resolve, reject) => {
//         const apiKey = '7e60d1c232326ba44e6a635e0248e747';
//         const privateKey = '27baed1e902e012968aaa3892be63a1d56ef8585';
//         const timestamp = new Date().getTime();
//         const hash = md5(timestamp + privateKey + apiKey);

//         const url = `https://gateway.marvel.com/v1/public/series?apikey=${apiKey}&hash=${hash}&ts=${timestamp}`;

//         axios.get(url)
//             .then(response => {
//                 const data = response.data;
//                 console.log('Datos obtenidos:', data);
//                 // Procesa los datos y carga en el repositorio
//                 repo.loadMovies(data);
//                 resolve(); // Resuelve la promesa después de cargar los datos en el repositorio
//             })
//             .catch(error => {
//                 console.error('Error al obtener los datos:', error);
//                 reject(error); // Rechaza la promesa si hay un error
//             });
//     });
// }

module.exports = getMarvelPelis;


