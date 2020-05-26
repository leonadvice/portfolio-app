/*global $, document*/
$(document).ready(function () {
    "use strict";

  

    var zero0 = $('.toggle-sm .navigate li:eq(0),.nav-left .navigate li:eq(0)'),
        one1 = $('.toggle-sm .navigate li:eq(1),.nav-left .navigate li:eq(1)'),
        two2 = $('.toggle-sm .navigate li:eq(2),.nav-left .navigate li:eq(2)'),
        three3 = $('.toggle-sm .navigate li:eq(3),.nav-left .navigate li:eq(3)');

        
    zero0.on('click', function () {
        $('.section-about').fadeIn();
        $('.section-work').fadeOut();
        $('.section-labs').fadeOut();
        $('.section-contact').fadeOut();
        $(this).css({"color": "#ea469e", "border-left": "5px solid #ff4ba8"}).end();
        one1.css({"color": "#fff", "border-left": "0px solid transparent"}).end();
        two2.css({"color": "#fff", "border-left": "0px solid transparent"}).end();
        three3.css({"color": "#fff", "border-left": "0px solid transparent"});
        

    });

    one1.on('click', function () {
        $('.section-about').fadeOut();
        $('.section-work').fadeIn();
        $('.section-labs').fadeOut();
        $('.section-contact').fadeOut();
        $(this).css({"color": "#ea469e", "border-left": "5px solid #ff4ba8"}).end();
        zero0.css({"color": "#fff", "border-left": "0px solid transparent"}).end();
        two2.css({"color": "#fff", "border-left": "0px solid transparent"}).end();
        three3.css({"color": "#fff", "border-left": "0px solid transparent"});
      
    });

    two2.on('click', function () {
        $('.section-about').fadeOut();
        $('.section-work').fadeOut();
        $('.section-contact').fadeOut();
        $('.section-labs').fadeIn();
        $(this).css({"color": "#ea469e", "border-left": "5px solid #ff4ba8"}).end();
        zero0.css({"color": "#fff", "border-left": "0px solid transparent"}).end();
        one1.css({"color": "#fff", "border-left": "0px solid transparent"}).end();
        three3.css({"color": "#fff", "border-left": "0px solid transparent"});

     
    });
    three3.on('click', function () {
        $('.section-about').fadeOut();
        $('.section-work').fadeOut();
        $('.section-labs').fadeOut();
        $('.section-contact').fadeIn();
        $(this).css({"color": "#ea469e", "border-left": "5px solid #ff4ba8"}).end();
        zero0.css({"color": "#fff", "border-left": "0px solid transparent"}).end();
        one1.css({"color": "#fff", "border-left": "0px solid transparent"}).end();
        two2.css({"color": "#fff", "border-left": "0px solid transparent"});

     
    });





});