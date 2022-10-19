// console.log(document.head); //-> <head>...</head>
// console.log(document.documentElement);//-> <html>...</html>
// console.log(document.body.childNodes); //-> выводит псевдомассив елементов-детей body NodeList(6)[text, div.wrapper, text, comment, text, script];
// console.log(document.body.firstChild); //->#text
// console.log(document.body.firstElementChild);//->wrapper
// console.log(document.body.lastChild); //->#text
// console.log(document.body.lastElementChild);//->script

// console.log(document.querySelector('#current').parentNode);//->first
// console.log(document.querySelector('#current').parentNode.parentNode);//->wrapper
// console.log(document.querySelector('#current').parentElement);//->first

// console.log(document.querySelector('[data-current="3"]'/*как достать дата атрибут*/).nextSibling);//->#text(потому что в верстке перенос строки)
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);//->вернет елемент а не узел

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}














// const test = document.createElement('div');
// test.classList.add('first');
// test.innerHTML = `
//     <button></button>
//     <button id="current"></button>
//     <button></button>
// `;
// document.body.append(test);