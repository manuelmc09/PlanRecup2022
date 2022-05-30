/**
 * @author
 * @version
 * @description
 */

/**
 * VERSION JQUERY y AJAX
 */
//Cuando el documento esté listo $(document).ready(function(){});
$(function(){
    $(".libros").on('click',function(event){
        $("ul.lista_libros").empty();
        $.ajax({
            url:"./ficheros/libros.json",
            dataType:"json",
            type:"GET",
            async:true,
            success:function(result){   //si todo fue bien
                    $("ul.lista_libros").append("<li></li>");
            },
            error:function(){
                
            }
        })
    })
})