function activeSectionHandler(currentSectionID) {
    const scroller = document.querySelectorAll('.scrollerBtn');
    scroller.forEach(link => {
        if (link.dataset.section === currentSectionID) {
            link.classList.add('scrollerActive');
        } else {
            link.classList.remove('scrollerActive');
        }
    });
}

if (typeof module !== 'undefined') {
    module.exports = activeSectionHandler;
} else {
    window.activeSectionHandler = activeSectionHandler;
}
