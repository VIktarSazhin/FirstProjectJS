"use strict";

const response1 = "";
const numberOfFilms = +prompt("How many films are you watching?", response1);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for(let i = 0; i < 2; i++) {
    const a = prompt("What is the last fils are you watching?", ""),
          b = prompt("What is his rating?", "");
    
    if(a != null && b != null &&  a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a]= b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else {
    alert("Произошла ошибка");
}


console.log(personalMovieDB);