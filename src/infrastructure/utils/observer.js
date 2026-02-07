export function initObserver() {
    let observer;
    const elements = document.querySelector('.footer');    
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-entrance');
            };
        })           
    }, {
        threshold: 0.3
    });
    observer.observe(elements);

};