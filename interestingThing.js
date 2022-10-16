//counter\\

function createCounter() {
    let counter = 0;

    const myFunction = function() {debugger
        counter = counter + 1;debugger
        return counter;debugger
    };

    return myFunction;
}

const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1,c2,c3);


//arrow function prikol\\

// let obj = {
//     text: 'hello',

//     sayText() {
//         return this.text;
//     },

//     sayTextArrow: () => console.log(this.text)
// }

// console.log(obj.sayTextArrow());

// console.log(!!( 1 && 2 ) === (1 && 2)) //->false Потому что первая часть дает булиновое значение а вторая число

console.log(1 || 0);