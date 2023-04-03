$(document).ready(function(){
    $('.listascanales .categorias[category="alls"]').addClass('selecto');

    //filtrado
    $('.categorias').click(function(){
        var catProduct = $(this).attr('category');

        //activo enlace
        $('.categorias').removeClass('selecto');
        $(this).addClass('selecto');

        //ocultar
        $('.canal').css('transform','scale(0)');
        function hideProduct(){
            $('.canal').hide();
        } setTimeout(hideProduct,100);

        //mostrar
        function showProduct(){
            $('.canal[category="'+catProduct+'"]').show();
            $('.canal[category="'+catProduct+'"]').css('transform','scale(1');
        } setTimeout(showProduct,100);
    });

    $('.categorias[category="alls"]').click(function(){
        function showAll(){
            $('.canal').show();
            $('.canal').css('transform','scale(1)');
        } setTimeout(showAll,100);
    });


    $('.listasopciones .opcion[category="youtube"]').addClass('cambiardor');

    //filtrado
    $('.opcion').click(function(){
        var catProduct = $(this).attr('category');

        //activo enlace
        $('.opcion').removeClass('cambiardor');
        $(this).addClass('cambiardor');

        //ocultar
        $('.reproductor').hide();
        
        //mostrar
        $('.reproductor[category="'+catProduct+'"]').show();
        
    });

    /*$(".opcion").on("click", function(){

        if($(".reproductor").is(":visible")){
            $(".reproductor").stop();
        }else{
            $(".reproductor").show();
        }
        
    })*/
        
    
});