/**
 * @author Manuel Macho Calvín
 * @version 1.0 Tarea 1 Actividades UT3 - UT4-Plan de Recuperación JUNIO 2022
 * @descriptionN Realizar una aplicación utilizando JavaScript que permita leer una cadena de texto y generar un array con la función split(). Posteriormente, mostrar la siguiente información: Número de 
palabras, primera palabra, última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a. 
Sacar toda esta información en una 
ventana nueva.
 *
 */ 
var cadena=window.prompt("Introducir una cadena");
var resultados="";
var newWin;
/**
 * Metodo para mostrar la cadena original como un array de palabras
 * @param {String} cad 
 */
function conversion(cad){
    var miarray=cad.split(",");
    console.log(miarray);
    resultados=resultados+"<p>Cadena: '"+miarray+"'<br></p>"
document.write("<p>Cadena: '"+miarray+"'<br></p>")
}
/**
 * 
 * @param {String} cad 
 */
function contarpalabras(cad){
    var miarray=cad.split(" ");
    var palabras=miarray.length;
    console.log("Número de palabras: "+palabras);
    resultados=resultados+"<p>Número de palabras: "+palabras+"</p>"
    document.write("<p>Número de palabras: "+palabras+"</p>")
}
/**
 * 
 * @param {String} cad 
 */
function primerapalabra(cad){
    var miarray=cad.split(" ");
    var first=miarray[0];
    resultados=resultados+"<p>Primera palabra: '"+first+"'. </p>"
    document.write("<p>Primera palabra: '"+first+"'. </p>")
}
/**
 * 
 * @param {String} cad 
 */
function ultimapalabra(cad){
    var miarray=cad.split(" ")
    console.log(miarray)
    var last=miarray[miarray.length-1]
    resultados=resultados+"<p>Ultima palabra: '"+last+"'. </p>"
    document.write("<p>Ultima palabra: '"+last+"'. </p>")

}
/**
 * 
 * @param {String} cad 
 */
function reverse(cad){
    var miarray=cad.split(' ')
    console.log("Cad:"+miarray);
    console.log(miarray[0]);
    var reves=[]
    for(var i=miarray.length-1;i>=0;i--){
        reves.push(miarray[i])
    }
    console.log(reves)
    resultados=resultados+"<p>Orden inverso: '"+reves+"'</p>"
    document.write("<p>Orden inverso: '"+reves+"'</p>")
   
}
/**
 * 
 * @param {String} cad 
 */
function ordenaAlf(cad){
    var miarray=cad.split(' ')
    console.log("Cad:"+miarray);
    resultados=resultados+"<p>Ordena de a-z: '"+miarray.sort()+"'</p>"
    document.write("<p>Ordena de a-z: '"+miarray.sort()+"'</p>")
}
/**
 * 
 * @param {String} cad 
 */
function ordenaInverse(cad){
    var miarray=cad.split(' ')
    console.log("Cad:"+miarray);
    var ordenado=[];
    var invertido=[];
    ordenado=miarray.sort();
    for(var i=ordenado.length-1;i>=0;i--){
        invertido.push(ordenado[i])
    }
    resultados=resultados+"<p>Ordena de z-a: '"+invertido+"'</p>"
    document.write("<p>Ordena de z-a: '"+invertido+"'</p>")

}

     conversion(cadena);
     contarpalabras(cadena);
     primerapalabra(cadena);
     ultimapalabra(cadena);
     reverse(cadena);
     ordenaAlf(cadena);
     ordenaInverse(cadena)

     /**
      * 
      */
   function cerrarVentana(){
       alert('La ventana se cerrara');
       self.close();
   }
   
  /**
   * Metodo para crer una ventana y sacar la información pedida
   * @param {String} cad 
   */
    function mostrarVentana(cad){
        newWin = window.open("http://localhost", "newWin", "width=450,height=500");
        newWin.document.write("<html><head><script>function cerrarNueva(){ self.close();}</script><title> INFORMACIÓN TAREA 2</title></head><body><h2>Aquí esta la información respecto a la Tarea 2: </h2><p>"+resultados+" </p></body></html > ");
        newWin.document.write("<button name='cerrar' onclick='cerrarNueva();'> Cerrar X </button>");
        newWin.focus();
    }

mostrarVentana(cadena)
   

    
    