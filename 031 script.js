/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';
let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    toggleVisibleMyDB() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },

    rememberFilms() {
        for (let i = 0; i < numberOfFilms; i++) {
            let a = prompt("Один из последних просмотренных фильмов?");
            let b = prompt("На сколько оцените его?");
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel() {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count > 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (this.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB() {
        if (!this.privat) {
            console.log(this);
        }
    },

    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            let userGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (userGenre === null || userGenre === '' || userGenre === ' ') {
                console.log("Некоректные данные");
                i--;
            } else {
                this.genres.push(userGenre);
            }            
        }
        this.genres.forEach((el, ind) => console.log(`Любимый жанр ${ind + 1} - это ${el}`));
    },

    start() {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
        this.count = numberOfFilms;
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            return this.start();
        }
        this.rememberFilms();
        this.detectPersonalLevel();
        // this.writeYourGenres();
        this.showMyDB();
    },
};