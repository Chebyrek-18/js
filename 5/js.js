"use strict"

function zad1() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    console.log(sum);
}


function zad2() {
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    console.log(menu);
    console.log(multiplyNumeric(menu));
}

function multiplyNumeric(menu) {
    for (const key in menu) {
        if (typeof (menu[key]) == "number") {
            menu[key] *= 2;
        }
    }
    return (menu);
}



function zad3() {
    let calculator = {
        a: 0,
        b: 0,
        read() {
            this.a = Number(prompt('Введите первое число'));
            this.b = Number(prompt('Введите второе число'));
            return 'Первое число'
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        }
    };
    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
}




function zad4() {
    let price = "$120";
    console.log(price);
    console.log(extractCurrencyValue(price));
}

function extractCurrencyValue(price) {
    let res = '';
    for (let i = 0; i < price.length; i++) {
        if (Number(price[i]) || price[i] == 0) {
            res += price[i];
        }
    }
    return (res);
}


function zad5() {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    let users = [vasya, petya, masha];
    let names = users.map(item => item.name);
    alert(names.join(', '));
}

function zad6(age) {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    let users = [vasya, petya, masha];
    console.log(getAverageAge(users));
}

function getAverageAge(users) {
    let sum = users.reduce((avg, item) => avg += item.age, 0);
    return Math.round(sum / users.length);
}
