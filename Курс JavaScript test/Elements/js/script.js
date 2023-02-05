'use strict';

// Получение эл-тов со страницы(41)

const box = document.getElementById('box'); // передаём обязательно строку
/* console.log(box); */ // document существует только внутри браузера

const btns = document.getElementsByTagName('button'); /* [1] */ // в btns передаётся псевдомассив(HTMLCollection). чтобы получить конкретную кнопку, например 2ю, указываем идентификатор [1]
/* console.log(btns[0]); */ // идентификатор [1] можно указать тут

// Даже если элемент на странице один, если не указывать идентификатор, будет передаваться HTMLCollection с одним элементом. Поэтому нужно обращаться непосредственно к кнопке btns[0].

// const circles = document.getElementsByClassName('circle');
/* console.log(circles[2]); */

const hearts = document.querySelectorAll('.heart'); // возвращает все элементы по селектору. этот метод исключение у псевдомассивов(NodeList), которые он возвращает появляется метод forEach

/* hearts.forEach((item) => {
    console.log(item);
});
console.log(hearts);
console.log(hearts[2]); */

const oneHeart = document.querySelector('.heart'); // возвращает первый элемент по селектору
/* console.log(oneHeart); */

// Действия с эл-тами на странице(42)

/* console.dir(box); */

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '50%';

const circles = document.querySelectorAll('.circle');
for (let index = 0; index < circles.length; index++) {
    circles[index].style.cssText = 'background-color: green; height: 150px; width: 150px';
}

hearts.forEach((e) => (e.style.cssText = 'background-color: #db733f; height: 100px; width: 100px'));

const div = document.createElement('div'); // элемент создан и он находится только внутри JS-скрипта, на html-странице его нет

div.classList.add('black');

// document.body.append(div);

document.querySelector('.wrapper').prepend(div);

// hearts[1].before(div);
// hearts[1].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = 'Hello World';
// div.innerHTML = '<h2>Hello World</h2>';

div.insertAdjacentHTML('', '<h2>HHHHH</h2>');
