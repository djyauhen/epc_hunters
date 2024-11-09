const sliderTrack = document.querySelector('.way-items-track');
const prevButton = document.getElementById('button-prev');
const nextButton = document.getElementById('button-next');
const smallMenuButton = document.getElementById('small-menu-button');
const smallMenuWindow = document.getElementById('small-menu');
const closeMenuButton = document.getElementById('close-menu-button');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.way-item').length;
let maxIndex;
if (window.innerWidth > 797) {
    maxIndex = totalSlides - 2;
} else {
    maxIndex = totalSlides - 1;
}

// Функция для обновления позиции трека
function updateSliderPosition() {
    let offset;
    if (window.innerWidth > 797) {
        offset = -(currentIndex * 52.45);
    } else {
        offset = -(currentIndex * 100.2);
    }
    sliderTrack.style.transform = `translateX(${offset}%)`;
}

// Обработчик для кнопки "Назад"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

// Обработчик для кнопки "Вперед"
nextButton.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSliderPosition();
    }
});

//Обработчик события для "бургера"
smallMenuButton.addEventListener('click', () => {
    if (smallMenuWindow) smallMenuWindow.showModal();
});

//Обработчик события для "крестика"
closeMenuButton.addEventListener('click', () => {
    if (smallMenuWindow && smallMenuWindow.showModal) smallMenuWindow.close();
});