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
console.log(sections);
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