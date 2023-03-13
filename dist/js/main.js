$( function() {
"use strict";
  // to hide left sidebar
  $('.toggle-sidebar').on('click', function() {
    $('.area-content , .sidebar').toggleClass('no-sidebar')
  })
  // for arrow on the left sidebar
  $(".toggle-menu").on('click', function() {
    $(this).next('.child').slideToggle();
    $(this).children('svg').toggleClass("fa-angle-right s, fa-angle-down")
  });
  // for fullscreen function
  $('.toggle-fullScreen').on("click", function() {
    $(this).children().toggleClass("full-screen");
    if ($(this).children().hasClass("full-screen")) {
      openFullscreen()
    }else {
      closeFullscreen();
    }
  });

  // for seetings box
  $('.toggle-gear').on('click', function() {
    $(this).find('li').toggleClass('fa-spin')
    $(this).parent().toggleClass('hide-box');
  })
  let themeClasses = [];
  $('.color-options li').each(function () {
    themeClasses.push($(this).data("theme"))
  })
  $(".color-options li").on('click', function() {
    $(this).addClass("active").siblings().removeClass("active");
    $('body').removeClass(themeClasses.join(' '))
    $('body').addClass($(this).attr('data-theme'));
  })
}); 

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