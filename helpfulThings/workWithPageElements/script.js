'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
//          ||
//          \/
box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';

// circles.style.backgroundColor = 'red';//->ОШИБКА - обращение к псевдомассив а не к элементу
// circles[0].style.backgroundColor = 'red';

//Такая конструкция почти не используется для перебора елементов псевдомассива
//Используют forEach
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div'); //СУЩЕСТВУЕТ ТОЛЬКО ВНУТРИ .js
// const text = document.createTextNode('GA'); //Используется очень редко. Помещает текст в узел и выводит на страницу

div.classList.add('black'); //Создает класс для елемента div, который существует пока что только внутри .js


//СОВРЕМЕННЫЕ МЕТОДЫ РАБОТЫ С DOM'ом\\


document.body.append(div); //Вставляет в ДОМ в конце body элемент div
wrapper.append(div); //засунул во wrapper элемент div. В КОНЕЦ
wrapper.prepend(div); //засунул во wrapper элемент div. В НАЧАЛО
hearts[2].before(div); //ставит перед(после) блоком(а), а не засовывает в него
circles[1].remove(); //удаляет елмент из документа
hearts[0].replaceWith(div);//заменяет 


//УСТАРЕВШИЕ МЕТОДЫ\\


// wrapper.appendChild(div);//ТОЖЕ СААМОЕ ЧТО И APPEND
// wrapper.insertBefore(div, hearts[0]);

//ИДЕТ ОБРАЩЕНИЕ К РОДИТЕЛЮ И ТОЛЬКО ПОТОМ УДАЛЕНИЕ(ПРОСТО remove ДЕЛАЕТ ЭТО БЕЗ ОБРАЩЕНИЯ)
//          ||
//          \/  
// wrapper.removeChild(hearts[1]); 

// wrapper.replaceChild(circles[0], hearts[0]);




div.innerHTML = "<h1>Hello WOrld</h1>";//Засовывает тег внутрь родительского элемента в моем случае div
// div.textContent = "Hello";
div.insertAdjacentHTML('beforeend',"<h2>Hello</h2>");