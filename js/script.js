   if($(window).width() >= 992) {
    $('.drop-dd').hover(function() {
      $('.drop-menu').fadeToggle();
    })
   } else if($(window).width() < 992) {
        $('.drop-menu').show();
   }

   if($(window).width() <= 480) {
    var botheight = $('.sticky-bottom').height();
    var offkheight = $('.off-can-body').height();
    var maxheight = offkheight - botheight;
    $('.off-can-body').css({
      'max-height' : maxheight,
      'overflow' : 'auto'
    });
   }