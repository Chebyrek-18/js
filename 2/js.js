"use strict"
function zad1() {
    let admin,
        name = "Джон";
    admin = name;
    alert(admin);
}

function zad2() {
    let city = prompt("Введите название города");
    let year = prompt("Введите год основания");
    let nas = prompt("Введите население города");
    alert(`Городу ${city} исполнилось ${new Date().getFullYear() - year} лет с момента его образования. Население - ${nas} человек`);
}

function zad3() {
    let R = prompt('Введите радиус круга:', 1);
    alert(typeof (R));
    alert(Math.PI * R * R);

}
function zad4() {
    let n1 = Number(prompt("Введите первое число"));
    let n2 = Number(prompt("Введите второе число"));
    alert(`
    Сумма чисел равна: ${n1 + n2}
    Вычитание первого числа из второго равна: ${n2 - n1}
    Вычитание второго числа из первого равна: ${n1 - n2}
    Деление первого числа на второе равно: ${n1 / n2}
    Деление второго числа на первое равно: ${n2 - n1}
    Произведение двух чисел равно: ${n1 * n2}`);
}