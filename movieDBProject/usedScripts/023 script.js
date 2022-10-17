/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        return start();
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        let a = prompt("Один из последних просмотренных фильмов?");
        let b = prompt("На сколько оцените его?");
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(database) {
    if (!database.privat) {
        console.log(database);
    }
}

showMyDB(personalMovieDB);

function writeYourGenres(database) {
    for (let i = 1; i <= 3; i ++) {
        let userGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        database.genres.push(userGenre);
    }
}

writeYourGenres(personalMovieDB);