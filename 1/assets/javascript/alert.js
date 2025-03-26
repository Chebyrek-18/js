"use strict";
alert('Я JavaScript');

function SetPrintFio() {
    var isTrue = false;
    while (isTrue != true) {
        let fn = prompt('Введите фамилию:', 'Фамилия');
        if (!fn) {
            break;
        }
        let n = prompt('Введите имя:', 'Имя');
        if (!n) {
            break;
        }
        let ln = prompt('Введите отчество:', 'Отчество');
        if (!ln) {
            break;
        }
        var isTrue = confirm(`Ваше ФИО ${fn + ' ' + n + ' ' + ln}.\nВсе верно?`);
        if (isTrue) {
            alert(`Здравствуйте ${fn + ' ' + n + ' ' + ln}!`);
        }
    }
}