
  //  const button = document.querySelector('#menu-button');
  //  const menu = document.querySelector('#menu');
    

    //  button.addEventListener('click', () => {
        //  menu.classList.toggle('hidden');
    //  });
    import { toggleHiddenClass } from './toggleHiddenClass.js';
    

    // Функция за добавяне на слушател към бутон, който превключва менюто
    export function initMenuToggle(buttonSelector, menuSelector) {
      const button = document.querySelector(buttonSelector);
      const menu = document.querySelector(menuSelector);

      if (!button || !menu) {
        console.warn('Button or menu element not found');
        return;
      }

      button.addEventListener('click', () => {
        toggleHiddenClass(menu);
      });
    }

    // Автоматично стартиране с дефинираните селектори
    initMenuToggle('#menu-button', '#menu');

 
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
