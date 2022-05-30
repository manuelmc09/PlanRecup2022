/**
 * @author Manuel Macho Calvín
 * @version 1.0 Tarea 1 Actividades UT2-Plan de Recuperación JUNIO 2022
 * @description Te encargar crear una aplicación web que permita representar rombos, de forma que el usuario puede introducir el tamaño. Por ejemplo, para un valor de tamaño 6, se debiera representar el siguiente rombo.
 1
 123
1234
12345
*/
//variable que almacena el número introducido para el tamaño 
var n=window.prompt("Introduzca un numero....")
while(n<=0){
    n=window.prompt("Introduzca un numero, debe ser mayor que 0")

}
//variable que almacena el numero de filas
var nfilas;
if(n==1 || n==2){
    nfilas=1;
}else if(n==3){
    nfilas=2;
}else if(n>3){
    nfilas=n-2
}
/**
 * Metodo para dibujar el triangulo usando dos parametros y las funciones para dibujar blancos y dibujar numeros
 * @param {*} n 
 * @param {*} nfilas 
 */
function dibujaTriangula(n,nfilas){
    nblancos=nfilas;
    numeros=1;
    for(i=1;i<=nfilas;i++){
        //dibujar blancos
        dibujaBlanco(nblancos);
        //dibujar numeros
        dibujaNumeros(numeros);
        nblancos=nblancos-1;
        if(i==1){
            numeros=numeros+2;
        }else{
            numeros=numeros+1
        }
    }
}

/**
 * Metodo para dibujar los espacios en blanco
 * @param {*} nb 
 */
function dibujaBlanco(nb){
    for(j=1;j<=nb;j++){
        document.write("<label>&nbsp;&nbsp;</label>")
    }
}
/**
 * Metodo para dibujar los numeros
 * @param {*} numero 
 */
function dibujaNumeros(numero){
    for(j=1;j<=numero;j++){
        document.write("<label>"+j+"</label>");
    }
    document.write("<br>");

}
dibujaTriangula(n,nfilas)