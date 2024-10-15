// Получаем блоки для наблюдения
const monitor = document.querySelector('.preloader__monitor');
const awardsBlock = document.querySelector('.awards');

// Настройка IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            monitor.style.opacity = '0'; // Скрываем монитор
        } else {
            monitor.style.opacity = '1'; // Показываем монитор, когда блок с наградами выходит из зоны видимости
        }
    });
}, {
    threshold: 0.5 // Половина блока наград должна быть видна, чтобы сработало событие
});

// Наблюдаем за блоком наград
observer.observe(awardsBlock);
