
/**
 * @author
 * @version
 * @description
 */


window.onload=function(){
    document.getElementById("nombre").addEventListener('blur',enMayuscula);
    document.getElementById("apellidos").addEventListener('blur',enMayuscula);
    document.getElementById("nombre").addEventListener('blur',validacion);
    document.getElementById("apellidos").addEventListener('blur',validacion);
    document.getElementById("edad").addEventListener('blur',validarEdad);
    document.getElementById("nif").addEventListener('blur',validarnif);
    document.getElementById("email").addEventListener('blur',validaremail);
    document.getElementById("fecha").addEventListener('blur',validarfecha);
    document.getElementById('provincia').addEventListener('blur',validarProvincia)
}
/**
 * 
 */
function enMayuscula(){
    var element=document.getElementById(this.id);
    element.value=element.value.toUpperCase();
}
/**
 * 
 */
function validacion(){
    var regexp=/[^0-9][a-zA-Z]+/
    var element=document.getElementById(this.id);
    if(element.value.length==0){
        document.getElementById('errores').innerHTML='<h3>No ha introducido ningún caracter</h3>';
        document.getElementById(this.id).focus();
    }else if(regexp.test(element.value)==false){
        document.getElementById('errores').innerHTML='<h3>Los datos introducidos son incorrectos.Debe de introducir caracteres. </h3>';
        document.getElementById(this.id).focus();
    }
}
/**
 * 
 */
function validarEdad(){
    var regexp=/[1-9]{1}[0-9]{1}/
    var element=document.getElementById(this.id);
    if(element.value==0){
        document.getElementById('errores').innerHTML='<h3>No ha introducido ningún número</h3>'
        document.getElementById(this.id).focus();
    }else if(regexp.test(element.value)==false){
        document.getElementById('errores').innerHTML='No es correcto.Debe de introducir un numero . ';
        document.getElementById(this.id).focus();

    }else if((element.value>90) || (element.value<18)){
        document.getElementById('errores').innerHTML='Debe de introducir un numero entre 18 y 90. ';
        document.getElementById(this.id).focus();

    }
}
/**
 * 
 */
function validarnif(){
    var regexp=/^[0-9]{8}\-[A-Z]{1}/;
    //[0-9]{8} digitos entre 0 y 9, 8 veces
    //\- caracter especial -
    //[A-Z]{1} caracter desde la A a Z una vez
    var element=document.getElementById(this.id);
    if(element.value.length==0){
        document.getElementById('errores').innerHTML='<h3>No ha introducido ningún valor para el nif</h3>';
        document.getElementById(this.id).focus();
    }else if(regexp.test(element.value)==false){
        document.getElementById('errores').innerHTML='No es correcto.Debe de introducir un nif valido.Debe tener [8 nums] [ - ] [letra]. ';
        document.getElementById(this.id).focus();

    }
}
function validaremail(){
var regexp=/[\w\-*]+@{1}[\w]+\.[a-z]{2,3}/;
//^[\w\-*]+ la cadena debe comenzar con caracteres alfanumericos y puede  o no contener el caracter especial   -
//@{1} debe seguir con el caracter @
//[\w]+\.[a-z]{2,3} contiene una cadena seguida obligatoriamente de un punto y 2 o 3 carateres entre a y z
var element=document.getElementById(this.id);
    if(element.value.length==0){
        document.getElementById('errores').innerHTML='<h3>No ha introducido ningún valor para el email</h3>';
        document.getElementById(this.id).focus();
    }else if(regexp.test(element.value)==false){
        document.getElementById('errores').innerHTML='No es correcto.Debe de introducir un email valido. Debe tener [letras] [ @ ] [dominio] [ . ] [es|com|org]. ';
        document.getElementById(this.id).focus();

    }
}
/**
 * 
 */
function validarfecha(){
var regexp=/([0-2][0-9]|[3][01])(\/|\-)([0][1-9]|[1][0-2])(\/|\-)(19[2-9][0-9]|20[0-1][0-9])/
var element=document.getElementById(this.id)
//  ([0-2][0-9]|[3][01]) controlamos los dias desde 01 a 31
//  (\/|\-) controlamos que pueda llevar - o tambien / para separar dias de meses y año
//  ([0][1-9]|[1][0-2]) controlamos los meses de 01 a 12
//  (19[2-9][0-9]|20[0-1][0-9])    controlamos el año desde 1920 a 2019
if(element.value.length==0){
    document.getElementById('errores').innerHTML='<h3>No ha introducido ningún valor para la fecha</h3>';
    document.getElementById(this.id).focus();
}else if(regexp.test(element.value)==false){
    document.getElementById('errores').innerHTML='No es correcto.Debe de introducir una fecha valida. Debe tener un formato igual a: dd/mm/aaaa o dd-mm-aaaa.';
    document.getElementById(this.id).focus();
}
}
/**
 * 
 */
function validarProvincia(){
    var element=document.getElementById(this.id);
    if(element.value=='0'){
        document.getElementById('errores').innerHTML='<h3>No ha selecionado ninguna opcion para la PROVINCIA</h3>';
        
    }

}


