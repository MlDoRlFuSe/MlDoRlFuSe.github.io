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
        nextArrow: $('.portfolio__header-arrow_next')
      });
    $('.testimonials__cards').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: $('.testimonials__header-arrow_prev'),
        nextArrow: $('.testimonials__header-arrow_next')
    });
    $(function() {
        $('.accordion-item-title').click(function() {
          var $item = $(this).parents('.accordion-item');
          $item.toggleClass('accordion-item--active').siblings('.accordion-item--active').removeClass('accordion-item--active');
        });
    });
});

