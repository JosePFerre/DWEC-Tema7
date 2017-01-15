//Jose Pablo Ferre Leorini

//Ejercicio 12
$(document).ready(function(){
	$(".elemento").hover(function(){
    	$(this).animate({ backgroundColor:"white",});
    	}, function(){
    	$(this).animate({ backgroundColor:"#f2299b",});
	});
});