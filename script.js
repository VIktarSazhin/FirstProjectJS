"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films are you watching?", '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films are you watching?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if(personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

rememberMyFilms();

function detectPersionalLevel() {
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
}

detectPersionalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

console.log(personalMovieDB);