//Jose Pablo Ferre Leorini

//Ejercicio 8


$(document).ready(function(){
    $("#peque").click(function(){
        $("p").css("font-size", "8px");
    });    
	
	$("#medio").click(function(){
        $("p").css("font-size", "16px");
    });
	
	$("#grande").click(function(){
        $("p").css("font-size", "32px");
    });
	
	$("h3").click(function(){
        $(this).next().toggle();
    });
	
	 $("p").hover(function(){
		$(this).css("background-color", "pink");
    	}, function(){
    	$(this).css("background-color", "white");
    });
});