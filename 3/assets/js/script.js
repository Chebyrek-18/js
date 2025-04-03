"use strict";

function Zadanie1() {
    let price = Number(prompt("Сколько стоит товар?"));
    let money = Number(prompt("Сколько у вас денег?"));
    if (price && money && price > 0 && money > 0) {
        if (price == money) {
            alert("Покупка совершена");
        } else if (price > money) {
            alert(`Для покупки не хватает ${price - money} р.`);
        } else {
            alert(`Покупка совершена. Сдача ${money - price} р.`);
        }
    } else {
        alert("Неверный формат ввода");
    }
}

function Zadanie2() {
    let n = Number(prompt("Введите число"));
    if (n > 0) {
        alert("1");
    } else if (n < 0) {
        alert("-1");
    } else {
        alert("0");
    }
}

function Zadanie3() {
    let a = Number(prompt("Введите a:"));
    let b = Number(prompt("Введите b:"));
    let result = (a + b < 4) ? 'Мало' : 'Много';
    alert(result);
}

function Zadanie4() {
    let login = prompt("введите логин:");
    let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
    alert(message);
}

function Zadanie5() {
    let login = prompt("введите логин:");
    if (login) {
        if (login == "Админ") {
            let pass = prompt("введите пароль:");
            if (pass) {
                if (pass == "Я главный") {
                    alert("Здравствуйте!");
                } else {
                    alert("Неверный пароль");
                }
            } else {
                alert("Отменено");
            }
        } else {
            alert("Я вас не знаю");
        }
    } else {
        alert("Отменено");
    }
}