function accardion() {
    let block = document.querySelector('.hidden').style.display;
    let btn = document.getElementById('all_spec').textContent;
    if (btn == 'Все характеристики') {
        document.getElementById('all_spec').textContent = 'Скрыть';
        document.querySelector('.hidden').style.display = 'block';
    }
    else {
        document.getElementById('all_spec').textContent = 'Все характеристики';
        document.querySelector('.hidden').style.display = 'none';
    }
}



function img_slider(img) {
    if (img.classList.contains('active')) {
        return;
    }
    document.querySelector('#main_img').src = img.src;
    let s = document.querySelectorAll('.slider img');
    for (let i = 0; i < s.length; i++) {
        s[i].classList.remove('active');
    }
    img.classList.toggle('active');
}

const dropdown = document.querySelector('.dropdown');

const drop_content = dropdown.querySelector('.drop_margin');
dropdown.addEventListener('mouseenter', function () {
    drop_content.classList.add('active');
});

dropdown.addEventListener('mouseleave', function () {
    drop_content.classList.remove('active');
});