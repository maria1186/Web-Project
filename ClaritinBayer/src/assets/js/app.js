import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
// Works only add css for .is-active
$(function () {
    $('ul li a').click(function () {
        $('li a').removeClass("is-active");
        $(this).addClass("is-active");
    });
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 120) {
        $('.top-bar').addClass('fixed-header');

    }
    else {
        $('top-bar').removeClass('fixed-header');

    }
});
