/**
 * @author Manuel Macho Calvín
 * @version Mayo 2022 v.1
 * @description Realiza un ejercicio trabajando con el objeto document que permita seleccionar un color para modificar el color de la pagina
 */

window.onload=function(){
 document.getElementById('modifica').addEventListener('click',modificacolor);
 
    
}
/**
 * Metodo que seleciona el color de las diferentes opciones del select y modifica el fondo con el color escogido
 */
function modificacolor(){
    var colores=document.getElementById('colorselecionado').value
   if(colores=='R'){
    document.body.style.background = "#FF0000"
   } else if( colores=='A'){
    document.body.style.background = "#0000FF"
   }else if(colores=='AM'){
    document.body.style.background = "#FFFF00"
   }else if(colores=='V'){
    document.body.style.background = "#008000"
   }
}

