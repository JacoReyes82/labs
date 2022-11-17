// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesFiltered = moviesArray.filter(movie => (movie.director == 'Steven Spielberg' && movie.genre.includes("Drama")))
    return moviesFiltered.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length>0) {
        const moviesWithScores = moviesArray.filter(movie => typeof movie.score == 'number'); 
        const sumScores = moviesWithScores.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score;
        }, 0);
        return Math.round(sumScores/moviesArray.length*100)/100;
    }
    else {
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const moviesFiltered = moviesArray.filter(movie => (movie.genre.includes("Drama") && typeof movie.score == 'number'));
    const sumScores = moviesFiltered.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
    }, 0);
    if (moviesFiltered.length > 0) {
    return Math.round(sumScores/moviesFiltered.length*100)/100;
    }
    else {
    return 0;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = [...moviesArray];
    const sortedByYear = moviesArrayCopy.sort(function(movie1, movie2) {
    return movie1.year - movie2.year;
    })
    const sortedByYearAndAlph = sortedByYear.sort(function(movie1, movie2) {
    if (movie1.year == movie2.year) {
        return movie1.title.localeCompare(movie2.title);      
    }
    })
        return sortedByYearAndAlph;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
