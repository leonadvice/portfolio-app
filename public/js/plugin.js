/*global $, document*/
$(document).ready(function () {
  'use strict';

  var zero0 = $('.toggle-sm .navigate li:eq(0),.nav-left .navigate li:eq(0)'),
    one1 = $('.toggle-sm .navigate li:eq(1),.nav-left .navigate li:eq(1)'),
    two2 = $('.toggle-sm .navigate li:eq(2),.nav-left .navigate li:eq(2)'),
    three3 = $('.toggle-sm .navigate li:eq(3),.nav-left .navigate li:eq(3)');

  zero0.on('click', function () {
    $('.section-about').fadeIn();
    $('.section-cv').fadeOut();
    $('.section-projects').fadeOut();
    $('.section-contact').fadeOut();
    $(this).css({ color: '#00BA85', 'border-left': '5px solid #02D196' }).end();
    one1.css({ color: '#fff', 'border-left': '0px solid transparent' }).end();
    two2.css({ color: '#fff', 'border-left': '0px solid transparent' }).end();
    three3.css({ color: '#fff', 'border-left': '0px solid transparent' });
  });

  one1.on('click', function () {
    $('.section-about').fadeOut();
    $('.section-cv').fadeIn();
    $('.section-projects').fadeOut();
    $('.section-contact').fadeOut();
    $(this).css({ color: '#00BA85', 'border-left': '5px solid #02D196' }).end();
    zero0.css({ color: '#fff', 'border-left': '0px solid transparent' }).end();
    two2.css({ color: '#fff', 'border-left': '0px solid transparent' }).end();
    three3.css({ color: '#fff', 'border-left': '0px solid transparent' });
  });

  two2.on('click', function () {
    $('.section-about').fadeOut();
    $('.section-cv').fadeOut();
    $('.section-contact').fadeOut();
    $('.section-projects').fadeIn();
    $(this).css({ color: '#00BA85', 'border-left': '5px solid #02D196' }).end();
    zero0.css({ color: '#fff', 'border-left': '0px solid transparent' }).end();
    one1.css({ color: '#fff', 'border-left': '0px solid transparent' }).end();
    three3.css({ color: '#fff', 'border-left': '0px solid transparent' });
  });
  three3.on('click', function () {
    $('.section-about').fadeOut();
    $('.section-cv').fadeOut();
    $('.section-projects').fadeOut();
    $('.section-contact').fadeIn();
    $(this).css({ color: '#00BA85', 'border-left': '5px solid #02D196' }).end();
    zero0.css({ color: '#fff', 'border-left': '0px solid transparent' }).end();
    one1.css({ color: '#fff', 'border-left': '0px solid transparent' }).end();
    two2.css({ color: '#fff', 'border-left': '0px solid transparent' });
  });
});
