const { JSDOM } = require('jsdom');
const activeSectionHandler = require('../js/activeSectionHandler');

describe('activeSectionHandler', () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM(`
      <div class="scrollerBtn" data-section="one"></div>
      <div class="scrollerBtn" data-section="two"></div>
    `);
    global.document = dom.window.document;
  });

  afterEach(() => {
    dom.window.close();
    delete global.document;
  });

  test('sets scrollerActive class on matching element', () => {
    const buttons = global.document.querySelectorAll('.scrollerBtn');
    activeSectionHandler('two');
    expect(buttons[1].classList.contains('scrollerActive')).toBe(true);
    expect(buttons[0].classList.contains('scrollerActive')).toBe(false);
  });
});
