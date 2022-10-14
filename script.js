"use strict";

const numberOfFilms = +prompt("How many films are you watching?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("What is the last fils are you watching?", ""),
      b = prompt("What is his rating?", ""),
      c = prompt("What is the last fils are you watching?", ""),
      d = prompt("What is his rating?", "");


personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;

console.log(personalMovieDB);