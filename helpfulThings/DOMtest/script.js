'use strict';
//СТАРЫЕ МЕТОДЫ\\

//GETELEMENTBYID\\
const box = document.getElementById('box'); 
// console.log(box);//->выводит елемент в консоль как он записан в .html


//HTMLCOLLECTION\\
const btns = document.getElementsByTagName('button'); //->псевдомассив. Можно указывать индекс прямо в константе 
//                                 // document.getElementsByTagName('button')[0] - получу первый елемент как и в массиве
// console.log(btns);//->получаю HTMLCollection - псевдомассив со всеми елементами у которіх тег button.
//                 //Если элемент 1 то он всеравно засовывается в HTMLCollection
// console.log(btns[1]); //-> получаю 2 кнопку. Принцип работы как и в массиве


//GETELEMENTBYCLASSNAME\\
const circles = document.getElementsByClassName('circle');
// console.log(circles); //->HTMLCollection [div.circle, div.circle, div.circle]


//НОВЫЕ МЕТОДЫ\\

//QUERYSELECTORALL\\
const hearts = document.querySelectorAll('.heart'); //->В скобки помещается CSS - селектор. ОБЯЗАТЕЛЬНО с точки
// console.log(hearts); //->Получаем псевдомассив. NodeList(4) [div.heart, div.heart, div.heart, div.heart]
    // hearts.forEach(item => {
    //     console.log(item);
    // });
    
//QUERYSELECTOR\\
const oneHeart = document.querySelector('.heart');
// console.log(oneHeart); //->выведет первый и единственный элемент удовлетворяюшщий данному селектору