$( document ).ready(function() {

  $('#about-link').on("click", function(){
    $(this).addClass('active');
  })

	var mainbottom = $('.about-section').offset().top + $('.about-section').height();
 
	$(window).on('scroll',function(){

    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar').addClass('after-header');
        $('.navbar-default').addClass('after-head')
   	} else {
   		$('.navbar').removeClass('after-header')
   		$('.navbar-default').removeClass('after-head')
   	}
	});
});