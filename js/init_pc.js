(function($){
$(function(){

//---------------------------------------------------------------------------------------------- http://semooh.jp/jquery/cont/doc/easing/

 $('a,.submit_area input').not('#gnav a,#reason li a').hover(function(){
			$(this).stop(true,true).animate({opacity: 0.6},200, 'easeOutQuart');
		}, function(){
			$(this).stop(true,true).animate({opacity: 1.0},400,'easeOutQuart');
			return false;
	});

	$('#mainnav a').not('#mainnav a.stay').hover(function(){
			$(this).stop(true,true).animate({backgroundColor: '#4A9ED3'},200, 'easeOutQuart');
		}, function(){
			$(this).stop(true,true).animate({backgroundColor: '#2980b9'},400,'easeOutQuart');
			return false;
	});


});
})(jQuery);
