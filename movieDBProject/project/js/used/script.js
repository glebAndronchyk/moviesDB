/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img"),
    promo = document.querySelector(".promo"),
    poster = promo.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    interactiveList = promo.querySelector(".promo__interactive-list");


adv.forEach(item => {
    item.remove();
});

// // genre.remove();
// genre.innerHTML = "<div class=\"promo__genre\">драма</div>";
genre.textContent = "драма";
poster.style.backgroundImage = "url(img/bg.jpg)";

interactiveList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    interactiveList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${film}
            <div class="delete"></div>
        </li>
    `;
});

// adv.repalceWith(promo);//->ошибка. ReplaceWIth меняет только элементы детей в одной Ноде(узле)
// const testBlock = document.createElement('div');
// testBlock.classList.add('promo');
// testBlock.innerHTML = ` <div class="promo__bg">
//     <div class="promo__genre">КОМЕДИЯ</div>
//     <div class="promo__title">МАРСИАНИН</div>
//     <div class="promo__descr">ИСТОРИЯ ЧЕЛОВЕКА, ВЫЖИВШЕГО НА ЧУЖОЙ ПЛАНЕТЕ В ОДИНОЧКУ</div>
//     <div class="promo__ratings">
//         <span>IMDb: 8.0</span>
//         <span>Кинопоиск: 7.7</span>
//     </div>
//     </div>`;
// promo.prepend(poster);
