$(function(){
	$('#main_box').fullpage({
		sectionsColor: ['#1bbc9b', '#1889C5', '#7BAABE', '#91B493'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu:"#menu",
		afterRender:function(){
			$('.section1 p, .section1 h1').hide();
			$('.section1 p, .section1 h1').fadeIn(2000);
			
		},
		afterLoad:function(anchorLink, index){
			if(index == 2) {
				$('.section2 h1').fadeIn(2000);
				$('.personal_details').animate({margin:"0"},1000);
				$('.individual_skills').animate({marginLeft:"50%"},1000);
			}
			if(index == 3) {
				$('.section3 h1').animate({marginLeft:"0"}, 1000);
				$('.section3 h3').animate({marginLeft:"0"}, 1000);
				$('.section3 article').animate({marginLeft:"0"}, 1000);
			}
			if(index == 4) {
				$('.section4 h1').fadeIn(2000);
				$(".section4 h3").animate({marginTop:"50px"}, 1000);

			}
		},
		onLeave: function(index, direction){
			if(index == '2') {
				$('.section2 h1').fadeOut(2000);
				$('.personal_details').animate({margin:"0 0 0 -100%"},1000);
				$('.individual_skills').animate({marginLeft:"150%"},1000);

			}
			if(index == "3") {
				$('.section3 h1').animate({marginLeft:"-100%"}, 1000);
				$('.section3 h3').animate({marginLeft:"-100%"}, 1000);
				$('.section3 article').animate({marginLeft:"150%"}, 1000);
			}
			if(index == "4") {
				$('.section4 h1').fadeOut(2000);
				$(".section4 h3").animate({marginTop:"100%"}, 1000);
			}
			
		}
		
	})
	
});
