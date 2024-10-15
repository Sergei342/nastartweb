
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
