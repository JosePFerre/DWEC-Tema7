//Jose Pablo Ferre Leorini
//Proyecto 1 Tema 7
var pagina = 0;
$(document).ready(function(){	
	$('#buscar').click(function(){
		nueva_busqueda();
		let busqueda = $('#busqueda').val();
		$.getJSON("http://www.omdbapi.com/?s="+busqueda, function(peliculas){
			if($("#filtroSerie").prop("checked")){
				for (pelicula of peliculas.Search){
					if (pelicula.Type == "series")
                	muestra_pelis(pelicula);
            	}
			}else if($("#filtroPelis").prop("checked")){
				for (pelicula of peliculas.Search){
					if (pelicula.Type == "movie")
                	muestra_pelis(pelicula);
            	}
			}else{
				for (pelicula of peliculas.Search){
                	muestra_pelis(pelicula);
			};
        };
	});
		
	$(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() >= $(document).height()-5) {
            cargar_datos();
        };
    });
});
});

function nueva_busqueda(){
    pagina=0;
    $("#contenedor").empty();
}

function cargar_datos(){
	pagina++;
	let busqueda = $('#busqueda').val();
	$.getJSON("http://www.omdbapi.com/?s="+busqueda+"&page="+pagina, function(peliculas){
        for(pelicula of peliculas.Search){
            muestra_pelis(pelicula);
        }
	});
}

function muestra_pelis(peli){
	$('#contenedor').append($("<div class='panel panel-info'><div class='panel-body'><img src="+peli.Poster+"></div><div class='panel-footer'><p><b>"+peli.Title+"</b></p><p>"+peli.Year+"</p></div></div>"));
};
