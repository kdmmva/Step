// Задание 1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
 
function Product(name, quantity, bought) {
    this.name = name;
    this.quantity = quantity;
    this.bought = bought;
}

let prodList = [];

function findProductByName(list, name) {
    return list.find(item => item.name === name);
}
 
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
 
function displayInfo(list) {
    const notBought = list.filter(item => !item.bought);
    const bought = list.filter(item => item.bought);

    console.log("Not bought products: ");
    notBought.forEach(item => console.log(`${item.name}: ${item.quantity}`));

    console.log("Bought products: ");
    bought.forEach(item => console.log(`${item.name}: ${item.quantity}`));
}
 
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
 
function addPurchase(list, name, quantity) {
    const existingItem = findProductByName(list, name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const newProduct = new Product(name, quantity, false);
        list.push(newProduct);
    }
}
 
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.
 
function buyProduct(list, name) {
    const prod = findProductByName(list, name);

    if(prod) {
        prod.bought = true;
    } else {
        console.log("Product not found");
    }
}
 
displayInfo(prodList);
console.log("\n");
 
addPurchase(prodList, "Apple", "9");
displayInfo(prodList);
console.log("\n");
 
buyProduct(prodList, "Apple");
displayInfo(prodList);
console.log("\n");
 
// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
 
function Item(prodName, quantity, pricePerUnit) {
    this.prodName = prodName;
    this.quantity = quantity;
    this.pricePerUnit = pricePerUnit;
}

let receipt = []

function addItem(prodName,quantity,pricePerUnit) {
    var item = new Item(prodName, quantity, pricePerUnit);
    receipt.push(item);
}
 
// 1. Распечатка чека на экран.
 
function printReceipt(list) {
    console.log("Receipt: ");
    list.forEach(item => console.log(`${item.prodName}: ${item.quantity} x ${item.pricePerUnit}$ = ${item.quantity * item.pricePerUnit}`))
}
 
// 2. Подсчет общей суммы покупки.
 
function calculateTotal(list) {
    let total = 0;
    list.forEach(item => {total += item.quantity * item.pricePerUnit});
 
    return total;
}
 
// 3. Получение самой дорогой покупки в чеке.
 
function getMostExpenciveItem(list) {
    if(list.lenght === 0) {
        return null;
    }
 
    let mostExpenciveItem = receipt[0];
    list.forEach(item => {
        if(item.pricePerUnit > mostExpenciveItem.pricePerUnit) {
            mostExpenciveItem = item;
        }
    })
 
    return mostExpenciveItem;
}
 
// 4. Подсчет средней стоимости одного товара в чеке.
 
function calculateAveragePricePerItem(list) {
    if(list.length === 0) {
        return 0;
    }

    let totalPrice = 0;
    list.forEach(item => {totalPrice += item.pricePerUnit});

    return totalPrice / list.length;
}

addItem("Prod1", 2, 10);
addItem("Prod2", 1, 20);
addItem("Prod3", 3, 15);
 
printReceipt(receipt);
console.log("\n");
 
console.log("Total: ", calculateTotal(receipt));
console.log("\n");
 
console.log("Most expencive item: ", getMostExpenciveItem(receipt));
console.log("\n");
 
console.log("Average price per item: ", calculateAveragePricePerItem(receipt));
console.log("\n");

// Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

var stylesArray = [
    { name: 'color', value: 'Red' },
    { name: 'font-size', value: '50px' },
    { name: 'text-align', value: 'center' },
    { name: 'font-family', value: 'Times New Roman, Times, serif'}
];

function applyStyles(styles, text) {
    var styleString = '';

    styles.forEach(function(style) {
        styleString += style.name + ':' + style.value + ';';
    });

    document.write('<p style="' + styleString + '">' + text + '</p>');
}

//applyStyles(stylesArray, 'AAAAAAAAA');

// Задание 4
// Создать массив аудиторий академии. Объект-аудитория состоит из названия,
// количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.

function Auditory (name, seats, faculty) {
    this.name = name;
    this.seats = seats;
    this.faculty = faculty;
}

var auditories = [];

function addAuditory(name, seats, faculty) {
    var auditory = new Auditory(name, seats, faculty);
    auditories.push(auditory);
}

// 1. Вывод на экран всех аудиторий.

function displayAllAuditories() {
    console.log("All auditories:");
    auditories.forEach(auditory => {
        console.log(`Name: ${auditory.name}, Seats: ${auditory.seats}, Faculty: ${auditory.faculty}`);
    });
}

// 2. Вывод на экран аудиторий для указанного факультета.

function displayAuditoriesByFaculty(faculty) {
    console.log(`All auditories for faculty "${faculty}":`);
    auditories.filter(auditory => auditory.faculty === faculty)
              .forEach(auditory => {
                  console.log(`Name: ${auditory.name}, Seats: ${auditory.seats}`);
              });
}

// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.

function displaySuitableAuditories(group) {
    console.log(`All auditories for group "${group.name}":`);
    auditories.filter(auditory => auditory.seats >= group.students && auditory.faculty === group.faculty)
              .forEach(auditory => {
                  console.log(`Name: ${auditory.name}, Seats: ${auditory.seats}`);
              });
}

// 4. Функция сортировки аудиторий по количеству мест.

function sortAuditoriesBySeats() {
    console.log("Sorting auditories by number of seats:");
    auditories.sort((a, b) => a.seats - b.seats)
              .forEach(auditory => {
                  console.log(`Name: ${auditory.name}, Seats: ${auditory.seats}`);
              });
}

// 5. Функция сортировки аудиторий по названию (по алфавиту).

function customCompare(a, b) {
    if (a < b) {
     return -1;
    }

    if (a > b) {
    return 1;
    }

    return 0;
}

function sortAuditoriesByName() {
    console.log("Sorting auditories by name:");
    auditories.sort((a, b) => customCompare(a.name, b.name))
              .forEach(auditory => {
                  console.log(`Name: ${auditory.name}, Seats: ${auditory.seats}`);
              });
}

addAuditory("A1", 15, "Software-developers");
addAuditory("A2", 20, "Software-developers");
addAuditory("A3", 12, "Designers");
addAuditory("B1", 18, "Designers");
addAuditory("B2", 10, "Software-developers");
addAuditory("B3", 17, "CyberSecurity");

displayAllAuditories();
console.log("\n");

displayAuditoriesByFaculty("Software-developers");
console.log("\n");

displaySuitableAuditories({ name: "Group 1", students: 15, faculty: "Designers" });
console.log("\n");

sortAuditoriesBySeats();
console.log("\n");

sortAuditoriesByName();