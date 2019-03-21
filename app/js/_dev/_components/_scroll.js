function scroll() {
   $(window).on('scroll', function(){
      if ($(this).scrollTop() >= $('.c-fixture__round').offset().top - 500){
         $('.js-scrollto-fixture').addClass('is-hidden');
      } else {
         $('.js-scrollto-fixture').removeClass('is-hidden');
      }
   });

   $('.js-scrollto-fixture').on('click', function(){
      $('html, body').animate(
         {
            scrollTop: $('.c-fixture__round').offset().top,
         }, {
            duration: 400,
            specialEasing: 'easeOutBounce'
         }
      )
   });

   $('.c-fixture__game').each(function(){
      if ($(this).hasClass('c-fixture__game--in-progress')){
         $('.js-scrollto-fixture').addClass('has-live');
      }
   });
}