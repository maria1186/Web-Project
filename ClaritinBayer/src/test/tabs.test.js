
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
import { JSDOM } from 'jsdom';
import { deactivateAllTabs, toggleTabContents, activateTab } from '../js/tabs.js';

describe('Tabs functions', () => {
  let document;
  let tabTogglers;
  let tabContents;

  beforeEach(() => {
    const dom = new JSDOM(`
      <div id="tabs">
        <ul>
          <li><a href="#tab1">Tab 1</a></li>
          <li><a href="#tab2">Tab 2</a></li>
          <li><a href="#tab3">Tab 3</a></li>
        </ul>
      </div>
      <div id="tab-contents">
        <div id="tab1" class="hidden">Content 1</div>
        <div id="tab2" class="hidden">Content 2</div>
        <div id="tab3" class="hidden">Content 3</div>
      </div>
    `);
    document = dom.window.document;
    tabTogglers = Array.from(document.querySelectorAll('#tabs a'));
    tabContents = document.querySelector('#tab-contents');
  });

  test('deactivateAllTabs removes active classes from all tabs', () => {
    // Предварително добавяме класове за да тестваме дали ги маха
    tabTogglers.forEach(toggler => {
      toggler.parentElement.classList.add("border-t", "border-r", "border-l","border-sky-600", "-mb-px", "bg-white");
    });

    deactivateAllTabs(tabTogglers);

    tabTogglers.forEach(toggler => {
      expect(toggler.parentElement.classList.contains("border-t")).toBe(false);
      expect(toggler.parentElement.classList.contains("border-r")).toBe(false);
      expect(toggler.parentElement.classList.contains("border-l")).toBe(false);
      expect(toggler.parentElement.classList.contains("border-sky-600")).toBe(false);
      expect(toggler.parentElement.classList.contains("-mb-px")).toBe(false);
      expect(toggler.parentElement.classList.contains("bg-white")).toBe(false);
    });
  });

  test('toggleTabContents shows only the active tab content', () => {
    toggleTabContents(tabContents, '#tab2');

    expect(tabContents.querySelector('#tab1').classList.contains('hidden')).toBe(true);
    expect(tabContents.querySelector('#tab2').classList.contains('hidden')).toBe(false);
    expect(tabContents.querySelector('#tab3').classList.contains('hidden')).toBe(true);
  });

  test('activateTab adds active classes to the tab', () => {
    const toggler = tabTogglers[1]; // втория таб
    activateTab(toggler);

    expect(toggler.parentElement.classList.contains("border-t")).toBe(true);
    expect(toggler.parentElement.classList.contains("border-r")).toBe(true);
    expect(toggler.parentElement.classList.contains("border-l")).toBe(true);
    expect(toggler.parentElement.classList.contains("border-sky-600")).toBe(true);
    expect(toggler.parentElement.classList.contains("-mb-px")).toBe(true);
    expect(toggler.parentElement.classList.contains("bg-white")).toBe(true);
  });
});
