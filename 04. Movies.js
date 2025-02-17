function solve(input) {
    let movies = [];
    input.forEach(element => {
        if (element.startsWith('addMovie')) {
            const movieName = element.substring(9);
            const movie = { name: movieName }
            movies.push(movie);
        }
        else {
            if (element.includes('directedBy')) {
                const [movieName, director] = element.split(' directedBy ');
                const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }
            }
            else if (element.includes('onDate')){
                const [movieName, date] = element.split(' onDate ');
                const movie = movies.find(movie => movie.name === movieName);

                if (movie) {
                    movie.date = date;
                }
            }
        }
    });
    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));

}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])