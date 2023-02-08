'use strict';

const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
// });

// let i = 0;

function handler(e) {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', handler);
    // }
}
btn.addEventListener('click', handler);
overlay.addEventListener('click', handler);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault(); // помещается в самое начало обработчика событий
    console.log(e.target);
});

const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target);
        console.log(e.type);
    });
});
