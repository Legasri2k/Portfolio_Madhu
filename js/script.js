

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 300
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container,.projects-box,.contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-contant h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contant p, .about-contant', { origin: 'right' });


