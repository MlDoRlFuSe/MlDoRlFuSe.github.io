$(".header__burger").on("click",function(){ 
    $(".header__mob-nav").slideToggle();   
   });

   $('.program__content').click(function() {
    var $item = $(this).parents('.program__item');
    $item.toggleClass('program__item-active').siblings('program__item-active').removeClass('program__item-active');
  });

  $('.questions__content').click(function() {
    var $item = $(this).parents('.questions__item');
    $item.toggleClass('questions__item-active').siblings('questions__item-active').removeClass('questions__item-active');
  });