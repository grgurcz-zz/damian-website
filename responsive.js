const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    const button = document.querySelectorAll('.nav-button');
    const back = document.querySelector('.burger-back');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        back.classList.toggle('burger-active');
    
        button.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
        
    
    });
    
    button.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        back.classList.toggle('burger-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();