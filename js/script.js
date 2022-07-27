   if($(window).width() >= 992) {
    $('.drop-dd').hover(function() {
      $('.drop-menu').fadeToggle();
    })
   } else if($(window).width() < 992) {
        $('.drop-menu').show();
   }

   if($(window).width() <= 480) {
    var botheight = $('.sticky-bottom').height();
    var offkheight = $('.offcanvas-body').height();
    var maxheight = offkheight - botheight;
    $('.offcanvas-body').css({
      'max-height' : maxheight,
      'overflow' : 'auto'
    });
   }