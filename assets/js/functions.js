$( document ).ready(function() {

    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

    $('input[name="phoneNum"]').inputmask("+9 (999) 999 99 99");


    $(':input[type="submit"]').prop('disabled', true);
    $('.checkbox1').change(function() {
        if($(this).is(":checked")) {
            $(':input[type="submit"]').prop('disabled', false);
        } else {
            $(':input[type="submit"]').prop('disabled', true);
        }
    });

    $('.navbar-toggler').click(function() {
      if($(this).attr('aria-expanded') === true) $(".navbar").addClass("scrolled");
      else $(".navbar").addClass("scrolled");
    });


    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {

        if($('.navbar-collapse').hasClass('show')) {
            $(this).parents('.navbar-collapse').collapse('hide');
        };
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();

          $('html, body').animate({
            scrollTop: target.offset().top - 78
          }, 1000)
            return false;
        }
      }
    });


    var hero
        , sections = $('section')
        , nav = $('nav');

    $(window).on('scroll', function () {
      var nav_height = nav.outerHeight();
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
      });
    });

});
