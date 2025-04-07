"use strict"
function zad1() {
    let a = prompt('Введите число а');
    let b = prompt('Введите число b');
    for (let c = Number(a); c <= b; c++) {
        if (c % 2 == 0) {
            alert(c);
        }
    }
}

function zad2() {
    let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++
    }

}

function zad3() {
    while (true) {
        let a = prompt('Введите число больше 10');
        if (a > 10 || a == null) {
            break;
        }
    }

}
function zad4() {
    alert(Math.min(prompt('Введите число а'), prompt('Введите число b')));
    // let a = prompt('Введите число а');
    // let b = prompt('Введите число b');
    // if (a > b) {
    //     alert(a);
    // }
    // else {
    //     alert(b);
    // }
}

function zad5() {
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }
    ask(
        "Вы согласны?",
        () => { alert("Вы согласились."); },
        () => { alert("Вы отменили выполнение."); }
    );

}

function zad6(age) {
    let message = (age < 18) ? confirm('Родители разрешили?') : '';
}

