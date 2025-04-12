"use strict";

function Zadanie1() {
    let div = document.body.querySelector('div');
    console.log(div);
    let ul = div.nextElementSibling;
    console.log(ul);
    let li = ul.firstElementChild.nextElementSibling;
    console.log(li);
}

function Zadanie2() {
    document.querySelectorAll('li').forEach((element) => {
        element.classList.add('list-item');
    });
}

function Zadanie3() {
    let container = document.querySelector('.zadanie3');
    let n = Number(prompt("Введите число:"));
    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        div.classList.add('block');
        container.append(div);
    }
}

function Zadanie4() {
    let container = document.querySelector('.zadanie4');
    let form = document.createElement('form');
    let name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'name');
    let email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('name', 'email');
    let btn = document.createElement('input');
    btn.setAttribute('type', 'submit');
    btn.setAttribute('name', 'login');
    container.append(form);
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(btn);
}