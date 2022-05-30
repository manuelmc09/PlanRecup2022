/**
 * @author Manuel Macho Calvín
 * @version 1.0 Tarea 3 Actividades UT2-Plan de Recuperación JUNIO 2022
 * @description Escribir un programa para determinar si un número n es primo (un número primo sólo es divisible por el mismo y por la unidad).

 */
//variable que almacena el número introducido por el usuario
var numero;
window.alert("Introducir un numero cualquiera mayor que 0 para saber si es primo");
do{
  numero=parseInt(window.prompt("Debe ser un número positivo mayor que 0. "));
}while(numero<1);
/**
 * Función para calcular si es primo o no el número introducido
 * @param {*} num 
 */
function esprimo(num){
 var primo=true;  //suponemos que el número es primo
if(num==1){
  document.write("<h2> 1 No es primo </h2>")
}
else if(num>1){ //controlamos para numeros mayores que 1
  for(var i=2;i<num;i++){ //controlamos si el numero ingresado es divisible por otro número
    if(num%i==0){ //controlamos si es divisible por numeros distintos de 1 y por el mismo
      primo=false;
    }
  }
  if(primo){
    document.write("<h2>El número introducido: </h2><p>"+num+"</p><h2>SI es numero primo</h2>")
  }else{
    document.write("<h2>El número introducido: </h2><p>"+num+"</p><h2>NO es numero primo</h2>")
  }
 }
}
esprimo(numero);