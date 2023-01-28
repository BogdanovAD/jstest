'use strict';

// let nuber = 5;
// debugger;
// function logNumber() {
//     /* let nuber = 4;
//     debugger; */
//     console.log(nuber);
//     debugger;
// }
// nuber = 6;

// logNumber();
// debugger;

// nuber = 8;

// logNumber();
// debugger;
function createCounter() {
    let counter = 0;

    const myFunction = function () {
        debugger;
        counter += 1;
        debugger;
        return counter;
        debugger;
    };
    return myFunction;
}
debugger;

const increment = createCounter();
debugger;
const c1 = increment();
debugger;
const c2 = increment();
debugger;
const c3 = increment();
debugger;

console.log(c1, c2, c3);
