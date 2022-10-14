"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt("How many films are you watching?", '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films are you watching?", '');
        }
    },
    rememberMyFilms: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if(personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    detectPersionalLevel: function() {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            const temp = prompt(`Ваш любимый жанр под номером ${i}`, '');
            
            if(temp === null || temp === '') {
                i--;
            } else {
                personalMovieDB.genres[i-1] = temp;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};