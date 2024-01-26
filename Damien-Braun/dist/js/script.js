$(document).ready(function(){
    $('.services__carousel').slick({
        prevArrow: $('.services__header-arrows_prev'),
        nextArrow: $('.services__header-arrows_next')
    });
    $('.portfolio__content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: $('.portfolio__header-arrow_prev'),
        nextArrow: $('.portfolio__header-arrow_next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                prevArrow: $('.portfolio__header-arrow_prev'),
                nextArrow: $('.portfolio__header-arrow_next')
              }
            },
            {
              breakpoint: 756,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                prevArrow: $('.portfolio__header-arrow_prev'),
                nextArrow: $('.portfolio__header-arrow_next')
              }
            }
          ]
      });
    $('.testimonials__cards').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: $('.testimonials__header-arrow_prev'),
        nextArrow: $('.testimonials__header-arrow_next'),
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2500,
              prevArrow: $('.testimonials__header-arrow_prev'),
              nextArrow: $('.testimonials__header-arrow_next')
            }
          },
          {
            breakpoint: 756,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2500,
              prevArrow: $('.testimonials__header-arrow_prev'),
              nextArrow: $('.testimonials__header-arrow_next')
            }
          }
        ]
    });
    $(function() {
        $('.accordion-item-title').click(function() {
          var $item = $(this).parents('.accordion-item');
          $item.toggleClass('accordion-item--active').siblings('.accordion-item--active').removeClass('accordion-item--active');
        });
    });
    $(".header__burger").on("click",function(){ 
        $(".header__menu").slideToggle();   
       });
       $('.photo__portraits-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: $('.photo__portraits-prev'),
        nextArrow: $('.photo__portraits-next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                prevArrow: $('.photo__portraits-prev'),
                nextArrow: $('.photo__portraits-next')
              }
            },
            {
              breakpoint: 756,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                prevArrow: $('.photo__portraits-prev'),
                nextArrow: $('.photo__portraits-next')
              }
            }
          ]
      });
       $('.photo__events-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: $('.photo__events-prev'),
        nextArrow: $('.photo__events-next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                prevArrow: $('.photo__events-prev'),
                nextArrow: $('.photo__events-next')
              }
            },
            {
              breakpoint: 756,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                prevArrow: $('.photo__events-prev'),
                nextArrow: $('.photo__events-next')
              }
            }
          ]
      });
      $('.photo__commercial-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: $('.photo__commercial-prev'),
        nextArrow: $('.photo__commercial-next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                prevArrow: $('.photo__commercial-prev'),
                nextArrow: $('.photo__commercial-next')
              }
            },
            {
              breakpoint: 756,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                prevArrow: $('.photo__commercial-prev'),
                nextArrow: $('.photo__commercial-next')
              }
            }
          ]
      });
});

