let observer;

export function animation() {
    const elements = document.querySelectorAll('.hero__image, .hero__content, .values__item, .contact__form');    
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('hero__image')) {
                    entry.target.classList.add('animation--left');
                } else if (entry.target.classList.contains('hero__content')) {
                    entry.target.classList.add('animation--right');
                } else if (entry.target.classList.contains('values__item') || entry.target.classList.contains('contact__form')) {
                    entry.target.classList.add('animation--scale');
                }
                observer.unobserve(entry.target);
            }
        })           
    }, {
        threshold: 0.2
    });
    elements.forEach(element => {
        observer.observe(element);
    })

}
