// jquery form validator
$.validate({
    modules: 'html5'
});

// CSS3 Animations with special effects https://github.com/miniMAC/magic
$('img').hover(function() {
    $(this).addClass('magictime puffIn');
});

// borrowed from Mr. Paul Irish http://paulirish.com/2009/avoiding-the-fouc-v3/ (thanks!)
  (function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement);