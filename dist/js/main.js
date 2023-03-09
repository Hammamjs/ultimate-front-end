$( function() {
"use strict";
  $('.toggle-sidebar').on('click', function() {
    $('.area-content , .sidebar').toggleClass('no-sidebar')
  })

  $(".toggle-menu").on('click', function() {
    $(this).next('.child').slideToggle();
    $(this).children('svg').toggleClass("fa-angle-right s, fa-angle-down")
  });

  $('.toggle-fullScreen').on("click", function() {
    $(this).children().toggleClass("full-screen");
    if ($(this).children().hasClass("full-screen")) {
      openFullscreen()
    }else {
      closeFullscreen();
    }
  });

});

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}