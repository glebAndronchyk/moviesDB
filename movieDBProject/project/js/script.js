/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

document.addEventListener('DOMContentLoaded', () => {

    const adv = document.querySelectorAll(".promo__adv img"),
        promo = document.querySelector(".promo"),
        poster = promo.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        interactiveList = promo.querySelector(".promo__interactive-list"),
        form = document.querySelector("form.add"),
        addingInput = form.querySelector(".adding__input"),
        checkbox = form.querySelector("[type='checkbox']");

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let addedFilm = addingInput.value;
        if (addedFilm) {       
            
            if (addedFilm.length > 21) {
                addedFilm = `${addedFilm.substring(0, 22)}...`;
                console.log(addedFilm);
             }

             movieDB.movies.push(addedFilm);    
             sortArr(movieDB.movies);
             createMovieList(movieDB.movies, interactiveList);
        }

        const checkboxCondition = checkbox.checked;
        if (checkboxCondition) {
            console.log("Добавляем любимый фильм");
        }

        event.target.reset();
    });

    function clearAdvImages(advArr) {
        advArr.forEach(item => {
            item.remove();
        });
    }

    function changeBGandGenre(parentBG, movieGenre) {
        parentBG.style.backgroundImage = "url(img/bg.jpg)";
        movieGenre.textContent = "драма";
    }

    function sortArr(arr) {
        arr.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}: ${film}
                <div class="delete"></div>
            </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    changeBGandGenre(poster, genre);
    clearAdvImages(adv);
    createMovieList(movieDB.movies, interactiveList);
});