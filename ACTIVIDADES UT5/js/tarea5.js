/**
 * @author Manuel Macho Calvín
 * @version Mayo 2022
 * @description Crea una web en la que se vea un cuadrado (bloque) de color #AABBCC. Realizar el código JavaScript/JQuery necesario para que el bloque (que será un elemento <div>) siga al puntero del ratón por la ventana del navegador sin que se salga de los límites de la ventana
 */
$(document).ready(function(){
    document.onmousemove=mover
})
function mover(elEvento){
    var evento=elEvento || window.event;
    //Forma de leer el ancho de la ventana del navegador en la mayoría de los navegadores
    var ancho=window.innerWidth || document.cocumentElement.clientWidth || document.body.clientWidth;
    //Forma de leer el alto de la ventana del navegador en la mayoría de los navegadores
    var alto=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var coordenadaX=evento.clientX;
    var coordenadaY=evento.clientY;
    //Si la coordenada X o Y es mayor que el alto/ancho-100, la coordenada X o Y valdrá alto/ancho-90 (tamaño de pieza)

    if(coordenadaY>alto+100){
        coordenadaY=alto-90;
    }
    if(coordenadaX>ancho-100){
        coordenadaX=ancho-90;
    }
    //Deberemos utilizar el siguiente fragmento de código JQuery para modificar las propiedades “top” y “left” del css para que tenga en cuenta las especificaciones que marca el ejercicio
    $(".block").css("left",parseFloat(coordenadaX));
    $(".block").css("top",parseFloat(coordenadaY))


}