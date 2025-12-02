let observer;
const technologies = [80, 60, 50, 30];

export function animationLeft() {
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

//export function increaseValues() {
    const valuesNum = document.querySelectorAll('.skill__percentage');
    const bar = document.querySelector('.skill__progress--html');

    console.log(valuesNum);
    valuesNum.forEach(element  => {
        if (element.classList.contains('skill__html')) {
            console.log('htm');
            let strToNum = parseInt(element.innerText)
            const IntervalId = setInterval(() => {
                if (strToNum >= technologies[0]) {
                    clearInterval(IntervalId);
                    return;
                } 
                strToNum += 1;
                element.innerText = strToNum;
            }, 40);
        } else if (element.classList.contains('skill__css')) {
            console.log('heeee');
        } else if (element.classList.contains('skill__js')) {
            console.log('js');
        } else if (element.classList.contains('skill__python')) {
            console.log('9');
        }
    });
//}
