const { JSDOM } = require('jsdom');

// stub browser-only globals
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

global.bootstrap = { ScrollSpy: function() {} };

global.Fancybox = { bind: () => {} };

const dom = new JSDOM(`<!doctype html><body>
  <div id="mainNav"></div>
  <div class="navbar-toggler"></div>
  <div id="navbarResponsive"><a class="nav-link"></a></div>
  <div id="currentYear"></div>
  <section id="sec1"></section>
  <section id="sec2"></section>
  <div class="scrollerContainer"></div>
  <a class="scrollerBtn" data-section="sec1"></a>
  <a class="scrollerBtn" data-section="sec2"></a>
  <div class="fade-in"></div>
  <div class="slide-in"></div>
  <img data-src="foo" />
  <div class="imgBtn"><span class="iconFA"></span></div>
</body>`);

global.window = dom.window;
global.document = dom.window.document;

delete require.cache[require.resolve('../js/scripts.js')];
const { activeSectionHandler } = require('../js/scripts.js');

describe('activeSectionHandler', () => {
  test('activates the matching scroller link', () => {
    const buttons = document.querySelectorAll('.scrollerBtn');
    // pre-activate second button
    buttons[1].classList.add('scrollerActive');

    activeSectionHandler('sec1');

    expect(buttons[0].classList.contains('scrollerActive')).toBe(true);
    expect(buttons[1].classList.contains('scrollerActive')).toBe(false);
  });
});
