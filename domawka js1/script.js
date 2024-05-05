//Задание 1
// Написать функцию, которая принимает 2 числа и возвращает -1, 
//если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.

function compareNumbers(num1, num2) {
    if(num1 < num2) {
        return -1;
    } else if(num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////
 
//Задание 2
//Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(num) {
    if(num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num -1);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////
 
//Задание 3
//Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.

function combineNum(num1, num2, num3) {
    return parseInt(num1.toString() + num2.toString() + num3.toString());
}

////////////////////////////////////////////////////////////////////////////////////////////
 
//Задание 4
// Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата

function calculateArea(length, width = length ) {
    return length * width;
}

////////////////////////////////////////////////////////////////////////////////////////////

//Задание 5
// Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//Совершенное число – это
// число, равное сумме всех своих собственных делителей.

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

////////////////////////////////////////////////////////////////////////////////////////////

//Задание 6
// Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.

function perfectNumbersInRange(min, max) {
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            console.log(i);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////

//Задание 7
// Написать функцию, которая принимает время (часы, минуты, секунды) 
//и выводит его на экран в формате «чч:мм:сс»

// function formatTime(hours, minutes, seconds) {
//     if (minutes === undefined) {
//         minutes = '00';
//     } else {
//         minutes = String(minutes);
//     }
    
//     if (seconds === undefined) {
//         seconds = '00';
//     } else {
//         seconds = String(seconds);
//     }

//     let formattedHours = String(hours);
//     if (hours < 10) {
//         formattedHours = '0' + formattedHours;
//     }

//     let formattedMinutes = minutes;
//     if (minutes < 10) {
//         formattedMinutes = '0' + formattedMinutes;
//     }

//     let formattedSeconds = seconds;
//     if (seconds < 10) {
//         formattedSeconds = '0' + formattedSeconds;
//     }

//     return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
// }

///////но лучше так 
function formatTime(hours, minutes, seconds) {
    minutes = minutes !== undefined ? String(minutes) : '00';
    seconds = seconds !== undefined ? String(seconds) : '00';

    hours = hours < 10 ? '0' + hours : String(hours);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
}


////////////////////////////////////////////////////////////////////////////////////////////

//Задание 8
// Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.
function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

////////////////////////////////////////////////////////////////////////////////////////////

//Задание 9
// Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».

function secondsToTime(totalSeconds) {
    const hours = customFloor(totalSeconds / 3600);

    let remainingSeconds = totalSeconds - hours * 3600;

    const minutes = customFloor(remainingSeconds / 60);

    const seconds = remainingSeconds - minutes * 60;

    const formattedTime = formatNumber(hours) + ':' + formatNumber(minutes) + ':' + formatNumber(seconds);

    return formattedTime;
}

//округление числа(наименьшее)
function customFloor(number) {
    if (number >= 0) {
        return number - (number % 1);
    } else {
        return number - (customAbs(number) % 1);
    }
}

//получение абсолютного значения числа
function customAbs(number) {
    return number >= 0 ? number : -number;
}

//добавление ведущего нуля, если число меньше 10
function formatNumber(number) {
    return number < 10 ? '0' + number : '' + number;
}

////////////////////////////////////////////////////////////////////////////////////////////

//Задание 10
// Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч:мм:сс». При
// выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч:мм:сс».

function differenceBetweenDates(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    const totalSeconds1 = timeToSeconds(hours1, minutes1, seconds1);
    const totalSeconds2 = timeToSeconds(hours2, minutes2, seconds2);

    const differenceSeconds = customAbs(totalSeconds2 - totalSeconds1);

    const differenceTime = secondsToTime(differenceSeconds);

    return differenceTime;
}


console.log(compareNumbers(5,10));

console.log(factorial(5));

console.log(combineNum(2,4,5));

console.log(calculateArea(4));

console.log(isPerfectNumber(30));

perfectNumbersInRange(1, 10000);

console.log(formatTime(6, 36, 39));

console.log(timeToSeconds(6,36,39));

console.log(secondsToTime(6969));

console.log(differenceBetweenDates(6,36,39,9,39,36));
