let observer;

export function animation() {
    const elements = document.querySelector('.footer');    
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-entrance');
            };
        })           
    }, {
        threshold: 0.4
    });
    observer.observe(elements);

}

