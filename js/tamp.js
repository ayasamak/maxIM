
$(document).ready(function(){
  $("body").niceScroll();
  $('.scrol i').click(function(){
    $('html , body').animate({scrollTop:0});
      });
    });
$(function(){
   'use strict';
$('.Portfolio ul li').on('click',function(){
  $ (this).addClass('active').siblings().removeClass('active');
  if ($(this).data('class')==='all'){
    $('.shuffle .col-4').css('opacity', 1);
  }
    else {
      $('.shuffle .col-4').css('opacity','.08');
      $($(this).data('class')).parent().css('opacity',1);
    }
  });
  $('.checkk').hover(function(){
    $(this).find('span').eq(0).animate({width:'100%'},500);
  }
  , function(){
    $('.checkk span:first').animate({ width: 0 },500);
  });
  $('.fixedtap i').click (function(){
    $(this).parent().toggleClass('visible');
    if ($('.fixedtap').hasClass('visible')){$('.fixedtap').animate({ left : 0},500 );
    $('body').animate({ marginLeft : '200'},500 );
  }
    else
      {
         $(this).parent().animate({ left: '-200'},500);
           $('body').animate({ marginLeft : '0'},500 );
      }
  });
});




$(function(){
   'use strict';

   $('.team .info ').hover(function(){
     if ($(this).data('class')==='.a'){ $('.team .a').css("display","block");}
     else if ($(this).data('class')==='.b'){ $('.team .b').css("display","block");}
     else if ($(this).data('class')==='.c'){$('.team .c').css("display","block");}
     else if ($(this).data('class')==='.d'){ $('.team .d').css("display","block");}
   }
   ,
function()
   {
     if ($(this).data('class')==='.a'){ $('.team .a') .css("display","none");}
     else if ($(this).data('class')==='.b'){ $('.team .b').css("display","none");}
     else if ($(this).data('class')==='.c'){$('.team .c') .css("display","none");}
   else if ($(this).data('class')==='.d'){ $('.team .d').css("display","none");}

   });
 });
 $(function(){
    'use strict';
    $("div .navbar .man li a").click(function(e){
      e.preventDefault();

      $("div .navbar  a").click(function(e){
      $(".navbar a").removeClass('active');
      $(this).addClass('active');
      });
    /*
      $ (this).addClass('active'). parent().siblings().find('a').removeClass('active'); another solution*/
      $('html , body').animate({
        scrollTop : $($(this).data('class')).offset().top-80
      },1000);

    });

    $(window).scroll(function(){
      $('.block').each(function(){
          if ($(window).scrollTop() > $ (this).offset().top)
          {
              $('div .navbar a').data("class")= $(this).atrr('class').addClass('active');
          }
        });
          if ($(window).scrollTop() > 700)
          {
            $('.scrol').fadeIn();
          }
          else{
    $('.scrol').fadeOut();
}
});
$('.inner button').click(function(e){
  e.preventDefault();
  $('.popup').fadeOut(2000);
});
$('.fixedtap ul li').click(function(){
  $('body').attr('data-default', $(this).data('color'));
});
});
