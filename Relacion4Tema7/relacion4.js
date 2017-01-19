//Jose Pablo Ferre Leorini
//Relacion 4 Tema 7

$(document).ready(function(){
	$.getJSON("correosRel4.json", function(correos){
        for(correo of correos.bandejadeentrada.correo){
			$("#contenedor").append($("<a href='#'><div class='contenedorCorreo'><h4>"+correo.remitente+"</h4><p>"+correo.asunto+"</p></div></a>"));
		}
    });
	
	function compruebaCorreo(){
		$.getJSON("correosRel4.json", function(correos){
			var y = correos.bandejadeentrada.correo.length;
			var x = $('.contenedorCorreo').length;
			if (x != y){
				for(i=x;i <= y; i++){
					$("#contenedor").prepend($("<a href='#'><div class='contenedorCorreo'><h4>"+correos.bandejadeentrada.correo[i].remitente+"</h4><p>"+correos.bandejadeentrada.correo[i].asunto+"</p></div></a>"));
				}
			}
	});
	};
	
	setInterval(compruebaCorreo, 5000);
	compruebaCorreo();
});