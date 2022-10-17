$(function(){
	$('.slider__inner').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
		nextArrow:"<button type='button' class='slick-next pull-right'></button>",
		responsive: [
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
  });
});