const overlay = document.querySelector(".overlay"),
      btn = overlay.querySelector("button");

// btn.onclick = function() { //НЕ ИСПОЛЬЗУЕТСЯ
//     alert('Click');
// }

// btn.onclick = function() { //ПРЕРЕЗАПИШЕТ МЕТОД ВЫШЕ, ЧТО ПЛОХО
//     alert('Second Click');
// }

// btn.addEventListener('click', () => {        //РАБОТАЮТ ОДИН ЗА ОДНИМ (1)
//     alert('Click');                                  ||
// });                                                  ||
//                                                      \/
// btn.addEventListener('click', () => {        //      (2)
//     alert('Second Click');
// });



// btn.addEventListener('mouseenter', (e) => {
//     // console.log(e);//-> объект события
//     // console.log(e.target);//->DOM элемент btn
//     e.target.remove();//->удалит кнопку
//     console.log('hover');//->hover
// });
//            /\
//            || upd
//            \/
// let i = 0;
// const deleteElement = (e) => {//отрбаотает 1 раз, после чего будет удален слушатель событи
//     i++;
//     console.log(e.target);
//     if (i == 1) {
//         btn.removeEventListener('mouseenter', deleteElement);//удаляет обработчик
//     }
// };
// btn.addEventListener('mouseenter', deleteElement);   //добавляет обработчик


//ВСПЛЫТИЕ\\

// const test = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
// };
// btn.addEventListener('click', test);   //ВСПЛЫТИЕ СОБЫТИЯ
// overlay.addEventListener('click', test);//ВСПЛЫТИЕ СОБЫТИЯ



//PREVENTDEFAULT()\\
const link = document.querySelector("a");
link.addEventListener('click', (event) => {
    event.preventDefault();                 //В примере с ссылкой, мы не переходим по ссылке
    console.log(event.target);
});
