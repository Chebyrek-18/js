"use strict";

document.querySelector('#zad1').addEventListener('click', (e) => {
    e.target.classList.add("display");
});

document.querySelector('#zad2').addEventListener('click', () => {
    document.getElementById('text').classList.add("display");
});

document.querySelector('#zad3').addEventListener('click', () => {
    document.getElementById('text-2').classList.toggle("display");
});


document.getElementById('hoverBtn').addEventListener('mouseenter', function () {
    this.classList.add('hover');
});

document.getElementById('hoverBtn').addEventListener('mouseleave', function () {
    this.classList.remove('hover');
});

document.getElementById('clickBtn').addEventListener('click', function () {
    this.classList.add('click');
    setTimeout(() => {
        this.classList.remove('click');
    }, 200);
});

document.getElementById('doubleClickBtn').addEventListener('dblclick', function () {
    this.style.backgroundColor = '#ff5722';
    setTimeout(() => {
        this.style.backgroundColor = '#ff00e6';
    }, 300);
});

document.getElementById('mouseDownBtn').addEventListener('mousedown', function () {
    this.style.transform = 'translateY(4px)';
    this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
});

document.getElementById('mouseUpBtn').addEventListener('mouseup', function () {
    this.style.transform = 'translateY(-4px)';
    this.style.boxShadow = '0 6px 8px rgba(0,0,0,0.2)';
    setTimeout(() => {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    }, 300);
});


document.addEventListener('keydown', (e) => {
    if (e.key == "R" || e.key == "r") {
        document.body.style.background = "red";
    }
    if (e.key == "G" || e.key == "g") {
        document.body.style.background = "green";
    }
    if (e.key == "B" || e.key == "b") {
        document.body.style.background = "blue";
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key == "R" || e.key == "r" ||
        e.key == "G" || e.key == "g" ||
        e.key == "B" || e.key == "b") {
        document.body.style.background = "";
    }
});

let posX = 0;
let posY = 0;
document.addEventListener('keydown', (e) => {
    if (e.code == "KeyW") {
        posY--;
    }
    if (e.code == "KeyS") {
        posY++;
    }
    if (e.code == "KeyD") {
        posX++;
    }
    if (e.code == "KeyA") {
        posX--;
    }
    document.querySelector('.zad6').style.transform = `translate(${posX}px, ${posY}px)`;
});