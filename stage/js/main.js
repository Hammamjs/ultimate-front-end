$( function() {
"use strict";
 $('.toggle-sidebar').on('click', function() {
  $('.area-content , .sidebar').toggleClass('no-sidebar')
 })

 $(".toggle-menu").on('click', function() {
  $(this).next('.child').slideToggle();
  $(this).children('svg').toggleClass("fa-angle-right s, fa-angle-down")
 })

})