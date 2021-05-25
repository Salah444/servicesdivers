jQuery(function($){
	"use strict";

	var SLZ = window.SLZ || {};


	/*=====================================
	=            MAIN FUNCTION            =
	=====================================*/
	
	SLZ.mainFunction = function(){

		// homepage ver 2
		$(".list-block-slick").slick({
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 2,
  			slidesToScroll: 1,
  			responsive: [
  				{
  					breakpoint: 769,
  					settings: {
  						dots: true,
  						arrows: false
  					}
  				},
  				{
  					breakpoint: 569,
  					settings: {
  						dots: true,
  						arrows: false,
  						slidesToShow: 1
  					}
  				}
  			]
		});

		// 
		if($(".video-embed-1").length) {
			var gurl = $(".video-embed-1")[0].src;
			$(".btn-play-1").on('click', function(event) { 
				setTimeout(function(){
					$(".video-embed-1")[0].src += "&autoplay=1";
				}, 300);
                event.preventDefault();
			});
			$(".btn-close-1").on('click', function(event) {
				$("#myModal").modal('hide');
			});
			$("#myModal").on('hide.bs.modal', function(e){
				$(".video-embed-1")[0].src = gurl;
			});
		}
	
	};
	
	/*=====  End of MAIN FUNCTION  ======*/



	
	/*=====================================
	=            INIT FUNCTION            =
	=====================================*/
	
	$(document).ready(function(){
        SLZ.mainFunction();
    });

    $(window).on('load', function() {
    });
	
	/*=====  End of INIT FUNCTION  ======*/
	
	
});