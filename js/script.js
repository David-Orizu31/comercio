   if($(window).width() >= 992) {
    $('.drop-dd').hover(function() {
      $('.drop-menu').fadeToggle();
    })
   } else if($(window).width() < 992) {
        $('.drop-menu').show();
   }