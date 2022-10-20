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

	/*
	 * Dropdown menu mobile
	 */

	var menu_mobile_btn = document.getElementById("menu_mobile_btn");
	var menu_mobile = document.querySelector(".menu");
	var submenus = document.querySelectorAll(".menu__list-submenu-list");
	var arrows_down = document.querySelectorAll(".arrow_down");

	// Toggle menu on button click 
	menu_mobile_btn.addEventListener('click', function(){
		menu_mobile.classList.toggle('menu__active');

		// Collapse all sub menus on button click 
		submenus.forEach(function(item){
			item.classList.remove('menu__active');
		});
	});

	// Toggle sub menu on arrow click 
	arrows_down.forEach(function(item){
		item.addEventListener('click', function(){
			this.closest('.menu__list-item-has-children').querySelector('.menu__list-submenu-list').classList.toggle('menu__active');
		});
	});

	// Collapse menu if the user clicks outside of it
	window.onclick = function(event){
		if(!event.target.matches('#menu_mobile_btn, .menu__list-item, .arrow_down, .search__form-field')){
			if(menu_mobile.classList.contains('menu__active')){
				menu_mobile.classList.remove('menu__active');
			}
		}
	}

});
