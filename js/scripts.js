/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };
     

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Copyright year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Fancy box
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    Carousel: {
      fill: false,
      center: true,
    },
  },
});

// scroller bar fade
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollerContainer');
    scroll.classList.toggle("active", window.scrollY > 1700)
});

// scroller bar responsive
const sections = document.querySelectorAll('section');
const scroller = document.querySelectorAll('.scrollerBtn');

const sectionWatcherCallback = (sections, sectionWatcher) => {
    sections.forEach(section => {
        if (!section.isIntersecting) {return};
        activeSectionHandler(section.target.id);
    })
};

// scroll bar intersection observer
const sectionWatcherOptions = {
    threshold: .20,
    rootMargin: '100px',
};

const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions);

sections.forEach(sections => {
    sectionWatcher.observe(sections);
});

const activeSectionHandler = (currentSectionID) => {
    scroller.forEach(link => {
        if(link.dataset.section === currentSectionID) {
            link.classList.add('scrollerActive');
            return;
        }
        link.classList.remove('scrollerActive');
    })
};

// main page + about animation
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    observer
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

// lazy loader
const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 600px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image)
});

// font awesome on click
const imgBtns = document.querySelectorAll('.imgBtn');

imgBtns.forEach(function(imgBtn){
    imgBtn.addEventListener('click', function(){
        const iconFA = this.querySelector("span")
        if (iconFA.classList.contains("iconFA")) {
            iconFA.classList.add("iconFAminus");
            iconFA.classList.remove("iconFA");
        } else {
            iconFA.classList.remove("iconFAminus");
            iconFA.classList.add("iconFA");
        }
    });
});
