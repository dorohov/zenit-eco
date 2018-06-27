'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');	
	var favorite = $('[data-slider-slick="slick-favorite"]');	
	var advantage = $('[data-slider-slick="slick-advantage"]');	
	var prevArrow = '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-left"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-right"></use></svg></button>';	
	var prevArrowLg = '<button type="button" class="slick-prev  is--horizontal"><div class="slick-btn-inner"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-left"></use></svg></div></button>';
	var nextArrowLg = '<button type="button" class="slick-next  is--horizontal"><div class="slick-btn-inner"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#slick-right"></use></svg></div></button>';	
	//var prevArrow = '<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/orelsau/img/svg/sprite.svg#slick-left"></use></svg></button>';
	//var nextArrow = '<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/orelsau/img/svg/sprite.svg#slick-right"></use></svg></button>';
	
	var slide_card = '.content-block__slick-item';
	var count_num = $('.slick-num');
    advantage.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(this).find(count_num).html('<div><span>' + i + '</span>/' + slick.slideCount + '</div>');
    });



    /*$slickElement.slick({
        slide: slide,
        autoplay: true,
        dots: false,
        arrows: true,
    });*/

	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		//infinite: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});
	advantage.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
        slide: slide_card,
		//infinite: true, 
		//autoplay: true,
  		//autoplaySpeed: 4000,
		prevArrow: prevArrowLg,
		nextArrow: nextArrowLg,
		//fade: true
	});
	/*
	favorite.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 1400,
				settings: {
					//dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 1025,
				settings: {					
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	*/
}); 