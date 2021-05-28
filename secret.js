"use strict";
!(function ($) {
  $(document).on('click', '.menu-item a', function (e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();

      var scrollto = target.offset().top;

      $('html, body').animate({
        scrollTop: scrollto
      }, 500, 'easeInOutExpo');
    }
  });
})(jQuery);
