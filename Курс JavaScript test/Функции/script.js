//Function Declaration
function humanSayHello(user) {
    console.log('Hello, ' + user + '!');
}

humanSayHello('Sasha');
//Function Expression
let calc = function (a, b) {
    return a + b;
};

console.log(calc(4, 5));
calc(4, 6);
calc(4, 7);

let count = 5;

function humanSayHello(user) {
    let count = 10;
    count++;
    console.log(count);
    console.log('Hello, ' + user + '!');
}

humanSayHello('Sasha');
console.log(count);

// function getMathResult(num, set) {
//     if (set <= 0 || typeof set !== 'number') {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= set; i++) {
//         if (i === set) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     console.log(str);
//     return str;
// }

// getMathResult(10, 5);

function getMathResult(a, b) {
    let result = a;
    if (b <= 0 || typeof b !== 'number') {
        result;
    } else {
        for (let i = 2; i <= b; i++) {
            result += `---${a * i}`;
        }
    }
    console.log(result);
    return result;
}
getMathResult(10, 5);

function getTimeFromMinutes(minutesTotal) {
    if (typeof minutesTotal !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return 'Ошибка, проверьте данные';
    }
    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursText = '';
    switch (hours) {
        case 1:
        case 21:
            hoursText = 'час';
            break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
            hoursText = 'часа';
            break;
        default:
            hoursText = 'часов';
    }
    if (hours === 0) {
        return `Это ${minutes} минут`;
    } else {
        return `Это ${hours} ${hoursText} и ${minutes} минут`;
    }
}
console.log(getTimeFromMinutes(149));
