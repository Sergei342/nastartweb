let topPosition = 450; // Начальное значение top

function adjustPosition() {
    const preloaderMonitor = document.querySelector('.preloader__monitor');
    const windowHeight = window.innerHeight;

    // Устанавливаем top
    preloaderMonitor.style.top = `${topPosition}px`;
}

function changeTop(newTop) {
    topPosition = newTop; // Обновляем значение top
    adjustPosition(); // Перепозиционируем блок
}

// Убедимся, что код выполняется после загрузки страницы
window.addEventListener('load', () => {
    adjustPosition(); // Устанавливаем значение top при загрузке
});

// Добавляем обработчик для изменения top при изменении окна
window.addEventListener('resize', () => {
    adjustPosition(); // Перепозиционируем блок при изменении размера окна
});

// Обработчик для прокрутки страницы
window.addEventListener('scroll', () => {
    const preloaderMonitor = document.querySelector('.preloader__monitor');
    const scrollTop = window.scrollY || document.documentElement.scrollTop; // Получаем текущую позицию прокрутки

    // Обновляем позицию блока в зависимости от прокрутки
    preloaderMonitor.style.top = `${topPosition + scrollTop}px`;

    // Скрытие блока при достижении awards
    const awardsBlock = document.querySelector('.awards');
    const awardsPosition = awardsBlock.getBoundingClientRect().top; // Позиция awards относительно окна

    // Если блок awards виден в области окна
    if (awardsPosition < windowHeight && awardsPosition > 0) {
        preloaderMonitor.style.opacity = 1 - (awardsPosition / windowHeight); // Прозрачность
    } else {
        preloaderMonitor.style.opacity = 1; // Возвращаем блок в полную видимость
    }
});










const monitor = document.querySelector('.preloader__monitor');
const awardsBlock = document.querySelector('.awards');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            monitor.style.opacity = '0'; 
        } else {
            monitor.style.opacity = '1'; 
        }
    });
}, {
    threshold: 0.5 
});


observer.observe(awardsBlock);
