// Вариант №1
let answers = [],
    questions = ['Как ваше имя?', 'Как ваша фамилия?', 'Сколько вам лет'];

for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i], '');
}

console.log(answers);

// Вариант №2
// let answers = [],
//     questions = ['Как ваше имя?', 'Как ваша фамилия?', 'Сколько вам лет'],
//     i = 0;
// do {
//     answers[i] = prompt(questions[i], '');
//     i++;
//     console.log(answers);
// } while (i < questions.length);

// Вариант №3
// let answers = [],
//     questions = ['Как ваше имя?', 'Как ваша фамилия?', 'Сколько вам лет'],
//     i = 0;
// while (i < questions.length) {
//     answers[i] = prompt(questions[i], '');
//     i++;
//     console.log(answers);
// }

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level ${k}`);
        }
    }
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

let a = 2;

while (a <= 16) {
    if (a % 2 === 0) {
        a++;
        continue;
    } else {
        console.log(a);
    }
    a++;
}

const arrayOfNumbers = [];

// Пишем решение вот тут
for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);

// Не трогаем
return arrayOfNumbers;

//

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        data[i] = data[i] * 2;
    } else {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data);
return data;
//
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

// Пишем решение вот тут
for (let i = 4; i < data.length; i--) {
    result[i] = data[i];
}
console.log(data);
// Не трогаем
return result;
