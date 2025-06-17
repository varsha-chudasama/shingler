export class Header {
  init() {
    this.HeaderHover();
    this.HeaderFixed();
  }
  HeaderHover(){
   $(document).ready(function () {

      // Mega Menu Hover
      $('.menu-item').hover(
        function () {
          if ($(this).find('.mega-menu').length) {
            // Close search menu if open
            $('header').removeClass('search-hover');
            
            // Open mega menu
            $('header').addClass('header-hover');
            $(this).addClass('menu-active');
            $('body').addClass('overflow-hidden header-open');
          }
        },
        function () {
          // Close mega menu
          $('header').removeClass('header-hover');
          $(this).removeClass('menu-active');
          $('body').removeClass('overflow-hidden header-open');
        }
      );

      // Header Search Click
      $('#header-search').on('click', function () {
        if ($('header').hasClass('search-hover')) {
          // Close search menu
          $('header').removeClass('search-hover');
          $('body').removeClass('overflow-hidden');
        } else {
          // Close mega menu if open
          $('header').removeClass('header-hover');
          $('.menu-item').removeClass('menu-active');
          $('body').removeClass('header-open');

          // Open search menu
          $('header').addClass('search-hover');
          $('body').addClass('overflow-hidden');
        }
      });

    });


  }

  HeaderFixed() {
        // header fixed js
        var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        $(window).scroll(function () {
            var sticky = $(".header"),
                scroll = $(window).scrollTop();
            if (scroll >= 50) {
                sticky.addClass("header-fixed");
                sticky.removeClass("header-fixed-os");
            }
            else {
                sticky.removeClass("header-fixed");
                sticky.addClass("header-fixed-os");
            }
            var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
                $(".header").removeClass("hidden");
            } else {
                $(".header").addClass("hidden");
            }
            prevScrollPos = currentScrollPos;
        });
    }
}
