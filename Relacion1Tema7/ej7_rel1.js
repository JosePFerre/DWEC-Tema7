//Jose Pablo Ferre Leorini

//Ejercicio 7
$(document).ready(function(){
	alert('La pagina ha cargado!');
	$("#cabecera").click(function(){
		alert($("head").html());
	});
	
	$("#cuerpo").click(function(){
		alert($("body").html());
	});
	
	$("#p1").click(function(){
		alert('Bien hecho!');
	});
	
	$("#p2").click(function(){
		$("#p2").hide();
	});
	
	$("#botonlista").click(function(){
		$("li").prepend('#');
	});
	
	$("li").click(function(){
		$(this).hide();
	});
	
	$("#enlaces").click(function(){
		$("a").html('Enlace misterioso');
	});
	
	$("#t1 tr").click(function(){
		$(this).css("background-color", "red");
		
	});
	$("#t2 tr").click(function(){
		$(this).hide();
	});
});