$(document).ready(function(){
	$("ul.menu li").click(function(e){
		$(".active").removeClass("active");
		$(this).addClass("active");
	});

});