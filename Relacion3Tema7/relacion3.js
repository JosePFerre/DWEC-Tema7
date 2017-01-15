//Jose Pablo Ferre Leorini

$(document).ready(function(){
	//Ejercicio 1
	$("#t1 tr:nth-child(3)").prevAll().children().css("background-color", "red" );
	$("#t1 tr:nth-child(3)").nextAll().children().css("background-color", "blue" );
	
	//Ejercicio 2
	$("#ej2 p:contains('eu')").css("background-color", "red" );
	
	//Ejercicio 3
	$("#t2 td:empty").css("background-color", "yellow");
	
	//Ejercicio 4
	$("#foco").click(function(){
        	$("#ejercicio4").focus();
    });
	$("#eliminarFoco").click(function(){
        	$("#ejercicio4").off("focus");
    });
	
	//Ejercicio 5
	$("#ej5").children().click(function(){
		$(this).siblings().andSelf().css( "background-color", "green" );
	});
	
	//Ejercicio 6
	var contador = 0;
	$("#ej6").click(function(){
		if (contador != 2){
		var fontSize = parseInt($(this).css("font-size"));
		fontSize = fontSize + 5 + "px";
		$(this).css({'font-size':fontSize});
		contador++;
		}else{
			contador = 0;
			var fontSize = parseInt($(this).css("font-size"));
			fontSize = fontSize - 10 + "px";
			$(this).css({'font-size':fontSize});
		}
	});
	
	//Ejercicio 7
	$("#animarEj7").click(function(){
		$("#cajaEj7").animate({width: "500px"});
		$("#cajaEj7").animate({width: "200px"});
		$("#cajaEj7").animate({height: "50px"});
		$("#cajaEj7").animate({width: "700px"});
	});
	
	$("#pararAnimacion").click(function(){
    	$("#cajaEj7").clearQueue();
	});
	
	//Ejercicio 8
	$("#caja1").hide();
	$("#caja2").hide();
	$("#caja3").hide();
	$("#caja4").hide();
	$("#caja5").hide();
	$("#animarEj8").click(function(){
		$("#caja1").fadeIn("slow");
		$("#caja2").fadeIn("fast");
		$("#caja3").fadeIn(800);
		$("#caja4").fadeIn(2000);
		$("#caja5").fadeIn(4000);
	});
	
	//Ejercicio 9
	$("#cajaEj9").hide();
	$("#startEj9").click(function(){
		$("#cajaEj9").fadeIn(1500);
		$("#cajaEj9").animate({marginLeft: "-=200px"});
		$("#cajaEj9").animate({ backgroundColor:"blue",});
		$("#cajaEj9").slideUp();
	});
	
	$("#stopEj9").click(function(){
    	$("#cajaEj9").clearQueue();
	});
	
	//Ejercicio 10
	$("#ejercicio10").keyup(function(e){
	var longitud = $(this).val().length;
    if(longitud > 0 && longitud < 5){
		$("#fortaleza").html('No segura');
	}else if(longitud > 4 && longitud < 9){
		$("#fortaleza").html('Medianamente segura');
	}else if(longitud > 8){
		$("#fortaleza").html('Segura');
	}else{
		$("#fortaleza").html('');
	}
	});
	
	//Ejercicio 11
	$("#ejercicio11").hover(function(){
    	$(".tip").toggle();
    	}, function(){
    	$(".tip").toggle();
	});
});