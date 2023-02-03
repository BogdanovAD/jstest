'use strict';

const box = document.getElementById('box'); // передаём обязательно строку
console.log(box); // document существует только внутри браузера

const btns = document.getElementsByTagName('button'); /* [1] */ // в btns передаётся псевдомассив(HTMLCollection). чтобы получить конкретную кнопку, например 2ю, указываем идентификатор [1]
console.log(btns[0]); // идентификатор [1] можно указать тут

// Даже если элемент на странице один, если не указывать идентификатор, будет передаваться HTMLCollection с одним элементом. Поэтому нужно обращаться непосредственно к кнопке btns[0].

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // возвращает все элементы по селектору. этот метод исключение у псевдомассивов(NodeList), которые он возвращает появляется метод forEach

hearts.forEach((item) => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // возвращает первый элемент по селектору
console.log(oneHeart);
