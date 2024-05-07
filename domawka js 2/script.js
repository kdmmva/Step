// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
 
function Car(manufacturer, model, year, averageSpeed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.averageSpeed = averageSpeed;
}
 
/// 1
Car.prototype.displayInfo = function() {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Average Speed: ${this.averageSpeed}`);
}
 
/// 2
Car.prototype.calculateTravelTime = function(distance) {
    const restInterval = 4; //kajdiye 4 casa
    const restDuration = 1; //pereriv 1 cas
 
    let travelTime = distance / this.averageSpeed;
    let restCount = 0;
 
    while(travelTime >= restInterval) {
        travelTime -= restInterval;
        restCount++;
    }
 
    let totalTime = distance / this.averageSpeed + restCount * restDuration;
 
    return totalTime;
}
 
let myCar = new Car("BMW", "F90", 2023, 250);
 
myCar.displayInfo();
 
let distance = 350;
let travelTime = myCar.calculateTravelTime(distance);
console.log(`Time to travel ${distance} km: ${travelTime.toFixed(2)} hours`);
 
 
// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
 
function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}
 
// 1. Функция сложения 2-х объектов-дробей.

function addFractions(fraction1, fraction2) {
    const commonDenominator = fraction1.denominator * fraction2.denominator;
    const newNumerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
    return new Fraction(newNumerator, commonDenominator);
}
 
// 2. Функция вычитания 2-х объектов-дробей.

function subtractFractions(fraction1, fraction2) {
    const commonDenominator = fraction1.denominator * fraction2.denominator;
    const newNumerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    return new Fraction(newNumerator, commonDenominator);
}
 
// 3. Функция умножения 2-х объектов-дробей.

function multiplyFractions(fraction1, fraction2) {
    const newNumerator = fraction1.numerator * fraction2.numerator;
    const commonDenominator = fraction1.denominator * fraction2.denominator;
    return new Fraction(newNumerator, commonDenominator);
}
 
// 4. Функция деления 2-х объектов-дробей.

function divideFraction(fraction1, fraction2) {
    const newNumerator = fraction1.numerator * fraction2.denominator;
    const commonDenominator = fraction1.denominator * fraction2.numerator;
    return new Fraction(newNumerator, commonDenominator);
}
 
// 5. Функция сокращения объекта-дроби.

function simplifyFraction(fraction) {
    const gcdValue = gcd(fraction.numerator, fraction.denominator);
    return new Fraction(fraction.numerator / gcdValue, fraction.denominator / gcdValue);
}
 
function gcd(a,b) {
    if(b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

const fraction1 = new Fraction(1, 2);
const fraction2 = new Fraction(2, 2);

console.log('');

const sumResult = addFractions(fraction1, fraction2);
console.log("Sum:", fraction1.numerator + "/" + fraction1.denominator, "+", fraction2.numerator + "/" + fraction2.denominator, "=", sumResult.numerator + "/" + sumResult.denominator);

const subtractResult = subtractFractions(fraction1, fraction2);
console.log("Subtract:", fraction1.numerator + "/" + fraction1.denominator, "-", fraction2.numerator + "/" + fraction2.denominator, "=", subtractResult.numerator + "/" + subtractResult.denominator);

const multiplyResult = multiplyFractions(fraction1, fraction2);
console.log("Multiply:", fraction1.numerator + "/" + fraction1.denominator, "*", fraction2.numerator + "/" + fraction2.denominator, "=", multiplyResult.numerator + "/" + multiplyResult.denominator);

const divideResult = divideFraction(fraction1, fraction2);
console.log("Divide:", fraction1.numerator + "/" + fraction1.denominator, "/", fraction2.numerator + "/" + fraction2.denominator, "=", divideResult.numerator + "/" + divideResult.denominator);

const simplifiedFraction1 = simplifyFraction(fraction1);
const simplifiedFraction2 = simplifyFraction(fraction2);
console.log("Simplify:", fraction1.numerator + "/" + fraction1.denominator, "=>", simplifiedFraction1.numerator + "/" + simplifiedFraction1.denominator);
console.log("Simplify:", fraction2.numerator + "/" + fraction2.denominator, "=>", simplifiedFraction2.numerator + "/" + simplifiedFraction2.denominator);


// Задание 3
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».

function Time(hours, minutes, seconds) {
    if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60 || seconds < 0 || seconds >= 60) {
        throw new Error("Invalid time values. Hours should be between 0 and 23, minutes and seconds should be between 0 and 59.");
    }
    
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
}

// 1. Функция вывода времени на экран.

Time.prototype.displayTime = function() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
}

// 2. Функция изменения времени на переданное количество
// секунд.

Time.prototype.adjustSeconds = function(seconds) {
    let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;

    totalSeconds = (totalSeconds % 86400 + 86400) % 86400;

    this.hours = totalSeconds / 3600 | 0;
    totalSeconds %= 3600;
    this.minutes = totalSeconds / 60 | 0;
    this.seconds = totalSeconds % 60;
}

// 3. Функция изменения времени на переданное количество
// минут.

Time.prototype.adjustMinutes = function(minutes) {
    let totalMinutes = this.hours * 60 + this.minutes + minutes;

    totalMinutes = (totalMinutes % 1440 + 1440) % 1440; 

    this.hours = totalMinutes >= 0 ? totalMinutes / 60 % 24 | 0 : (totalMinutes / 60 % 24 + 24) % 24;
    this.minutes = totalMinutes >= 0 ? totalMinutes % 60 : (totalMinutes % 60 + 60) % 60;
}

// 4. Функция изменения времени на переданное количествоv часов.

Time.prototype.adjustHours = function(hours) {
    this.hours = (this.hours + hours) % 24;
    if (this.hours < 0) {
        this.hours += 24;
    }
}

console.log('');

const time = new Time(10, 39, 11);
console.log("Current time:");
time.displayTime();

time.adjustSeconds(100);
console.log("Time after adding 100 seconds:");
time.displayTime();

time.adjustMinutes(100);
console.log("Time after adding 100 minutes:");
time.displayTime();

time.adjustHours(10);
console.log("Time after adding 10 hours:");
time.displayTime();