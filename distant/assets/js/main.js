
// Меню бургер
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.querySelector('i').classList.toggle('fa-times');
    burger.querySelector('i').classList.toggle('fa-bars');
});

// Плавная прокрутка для ссылок меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.getAttribute('href') === '#') return;

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });

            // Закрываем меню на мобильных устройствах после клика
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                burger.querySelector('i').classList.remove('fa-times');
                burger.querySelector('i').classList.add('fa-bars');
            }
        }
    });
});

// Аккордеон для услуг
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        // Закрываем все открытые элементы
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-content').style.maxHeight = '0';
            }
        });

        // Открываем/закрываем текущий элемент
        item.classList.toggle('active');
        const content = item.querySelector('.accordion-content');

        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    });
});

// Слайдер портфолио
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.slider-dot');

let currentSlide = 0;
const slideCount = slides.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Обновляем активную точку
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Навигация по точкам
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

// Автоматическое переключение слайдов
let slideInterval = setInterval(nextSlide, 5000);

// Остановка автоматического переключения при наведении
slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Вкладки отзывов
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');

        // Убираем активный класс у всех кнопок и контента
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Добавляем активный класс текущей кнопке и соответствующему контенту
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Валидация формы
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Валидация имени
    if (nameInput.value.trim().length < 2) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Валидация телефона
    if (phoneInput.value.trim() === '') {
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Валидация сообщения
    if (messageInput.value.trim().length < 10) {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    // Если форма валидна, отправляем данные (имитация)
    if (isValid) {
        // Здесь обычно AJAX-запрос к серверу
        // Для демонстрации просто покажем сообщение об успехе

        // Скрываем предыдущие сообщения
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Имитация отправки с задержкой
        setTimeout(() => {
            // В реальном проекте здесь будет проверка ответа сервера
            const isSuccess = true; // Для демонстрации всегда успех

            if (isSuccess) {
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                contactForm.reset(); // Очищаем форму

                // Скрываем сообщение через 5 секунд
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            } else {
                successMessage.style.display = 'none';
                errorMessage.style.display = 'block';

                // Скрываем сообщение через 5 секунд
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 5000);
            }
        }, 1000);
    }
});

// Закрытие сообщений при клике
successMessage.addEventListener('click', () => {
    successMessage.style.display = 'none';
});

errorMessage.addEventListener('click', () => {
    errorMessage.style.display = 'none';
});

// Маска для телефона
phoneInput.addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});

// Показать/скрыть кнопку "Наверх"
const scrollToTopBtn = document.createElement('div');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '30px';
scrollToTopBtn.style.right = '30px';
scrollToTopBtn.style.width = '50px';
scrollToTopBtn.style.height = '50px';
scrollToTopBtn.style.backgroundColor = 'var(--secondary-color)';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.display = 'flex';
scrollToTopBtn.style.justifyContent = 'center';
scrollToTopBtn.style.alignItems = 'center';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
scrollToTopBtn.style.transition = 'all 0.3s';
scrollToTopBtn.style.opacity = '0';
scrollToTopBtn.style.visibility = 'hidden';
scrollToTopBtn.style.zIndex = '999';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.backgroundColor = '#c0392b';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.backgroundColor = 'var(--secondary-color)';
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Анимация при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-content, .services-container, .slider-container, .tabs, .contact-form');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Инициализация анимации
elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Запустить при загрузке для видимых элементов