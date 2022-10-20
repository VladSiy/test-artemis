$(function(){
	
	/* 
	* Slider
	*/

	$('.slider__inner').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
		nextArrow:"<button type='button' class='slick-next pull-right'></button>",
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
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

	/* 
	* Set YouTube video in slider 
	*/

	var loadPlayer = function(event){
		var target = event.currentTarget;
		var iframe = document.createElement('iframe');
		
		iframe.height = target.clientHeight;
		iframe.width = target.clientWidth;
		iframe.src = 'https://www.youtube.com/embed/' + target.dataset.videoId + '?autoplay=1';
		iframe.setAttribute('frameborder', 0);
		// Enable autoplay for chrome 
		iframe.setAttribute('allow', 'autoplay');
		target.children[1].remove('slider__item-btn-play');
		
		if(target.children.length){
			target.replaceChild(iframe, target.firstElementChild);
		} else {
			target.appendChild(iframe);
		}
	}
	var players = document.querySelectorAll('.slider__item-video');
	var config = {once: true}
	players.forEach(function(player){
		player.addEventListener('click', loadPlayer, config);
	})

