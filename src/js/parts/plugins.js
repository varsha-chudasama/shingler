import "slick-carousel";

export class Plugins {

  init() {
    this.HomeHeroSlider();
    this.ProjectAutoSlider();
    this.TestimonialSlider();
    this.HistorySlider();
    this.LogoSlider();
    this.ContinueReading();
    this.FooterSlider();
    this.LatestNewsSlider();
    this.HowWeWorkSlider();
  }

  HomeHeroSlider() {
    $('.hero-slider').on('init reInit afterChange', function (event, slick, currentSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var total = slick.slideCount;

      // Update numbers
      $('.slick-counter .current').text(i < 10 ? '0' + i : i);
      $('.slick-counter .total').text(total < 10 ? '0' + total : total);
    });

    $('.hero-slider').on('init', function (event, slick) {
      var totalSlides = slick.slideCount;

      if (totalSlides <= 1) {
        // Hide counter if only 1 slide
        $('.slick-counter').addClass('d-none');
      } else {
        // Show counter and move dots inside wrapper
        $('.slick-counter').removeClass('d-none');
        $('.slick-counter .dots-wrapper').html($('.hero-slider .slick-dots'));
      }
    });

    $('.hero-slider').slick({
      dots: true,
      infinite: false,
      arrows: false,
      slidesToScroll: 1,
      slidesToShow: 1,
      fade: true,
    });
  }

  ProjectAutoSlider() {
    $('.project-auto-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  TestimonialSlider() {
    $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      slidesToScroll: 1,
      slidesToShow: 1,
      fade: true,
    });
  }

  LatestNewsSlider() {
    $('.latest-news-slider').slick({
      dots: false,
      infinite: false,
      arrows: false,
      slidesToScroll: 1,
      slidesToShow: 1,
    });
  }

  HowWeWorkSlider() {
    $('.how-we-work-slider').slick({
      dots: false,
      infinite: false,
      arrows: false,
      slidesToScroll: 1,
      slidesToShow: 1,
    });
  }

  HistorySlider() {
    $('.history-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.history-slider-section .prev-arrow',
      nextArrow: '.history-slider-section .next-arrow',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
  }

  LogoSlider() {
    $('.logo-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });

  }

  ContinueReading() {
    $('.continue-reading-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

  }

  FooterSlider() {
    $('.footer-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }
}
