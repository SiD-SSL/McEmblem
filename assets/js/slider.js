// ====================================================
//       		       DEMO SLIDER JS                //
// ====================================================
$('.banner-slider').slick({
    dots: false,
	arrows: true,
    autoplay: true,
	autoplaySpeed: 1500,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    prevArrow: '<i class="fas fa-caret-left left-arrow"></i>',
	nextArrow: '<i class="fas fa-caret-right right-arrow"></i>',
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		}
	  ]
});



// ====================================================
//       		NEW ARRIVAL SLIDER JS                //
// ====================================================
$('.arrival-slider').slick({
    dots: false,
	arrows: true,
    autoplay: false,
	autoplaySpeed: 1500,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    vertical: false,
    prevArrow: '<i class="fas fa-caret-left left-arrow"></i>',
	nextArrow: '<i class="fas fa-caret-right right-arrow"></i>',
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		}
	  ]
});




// ====================================================
//       			  TEAM SLIDER JS                 //
// ====================================================
$('.team-slider').slick({
    dots: false,
	arrows: true,
    autoplay: false,
	autoplaySpeed: 1500,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    prevArrow: '<i class="fas fa-caret-left left-arrow"></i>',
	nextArrow: '<i class="fas fa-caret-right right-arrow"></i>',
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		}
	  ]
});

