/*============== toggle icon navbar ================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*============= scroll sections active link ================*/
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>= offset && top < offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href* =' + id + ']').classList.add('active');
            });
        };
    });
    /* ================ Sticky navbar ========================*/
    let header =document.querySelector('header');

    header.classList.toggle('sticky'.window.scrollY>100);

    /*============== remove toggle icon and navbar when click navbar link(scroll) ================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* ================ scroll reveal ========================*/
ScrollReveal({
    //reset:true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});
/*======== Typed js ==============*/
const typed = new typed('multiple-text' =  {
    strings : ['Frontend Developer' , 'Youtube','BLogger'],
    typeSpeed :100,
    backSpeed: 100,
    backDelay : 1000,
    loop :true

}
)


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".certificate-slider");
    const certificates = Array.from(slider.children);

    // Duplicate the certificates for smooth looping
    certificates.forEach(cert => {
        let clone = cert.cloneNode(true);
        slider.appendChild(clone);
    });

    // Pause scrolling on hover
    slider.addEventListener("mouseenter", () => {
        slider.style.animationPlayState = "paused";
    });

    // Resume scrolling on mouse leave
    slider.addEventListener("mouseleave", () => {
        slider.style.animationPlayState = "running";
    });
});
