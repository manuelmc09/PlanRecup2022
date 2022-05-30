/**
 * @author Manuel Macho Calvín
 * @version 1.0 Tarea 1 Actividades UT3- UT4-Plan de Recuperación JUNIO 2022
 * @description Crear una aplicación web que solicite al usuario una dirección de correo electrónico y una dirección url. Crear dos funciones una denominada validaEmail que permita validar una dirección de email recibida y otra función denominada valida Url que permita validar la url. 
 Deberá mostrar en la web la dirección de email y si es o no correcta, y la url y si es o no correcta. 
 Debe utilizar expresiones regulares para esta tarea. Añade dos datos más los que quieras y crea los métodos de validación adecuados.
 */
var correo=window.prompt("Introducir un email: ");
var direccion=window.prompt("Introducir una dirección URL: ");
var codigo=window.prompt("Introducir su numero de IBAN (ES)");
var master=window.prompt("Introducir el número de la tarjeta de credito")

/**
 * Función para validar un email
 * @param {*} email 
 */
function validaEmail(email){
let regexp=/^[\w\.]+@{1}[\w\.]+\.[a-z]{2,3}/;
    if (regexp.test(email)) {
    document.write("<p>El correo "+email+" es valido</p>");
        } else {
    document.write("<p>El correo "+email+" NO es valido</p>");
    }
}
/**
 * Función para validar una dirección url
 * @param {*} url 
 */
function validaUrl(url){
    let regexp=/^http[s]?:\/\/?www\.([A-z]+)\.([A-z]{2,})/
    if (regexp.test(url)) {
        document.write("<p>La dirección "+url+" es valido</p>");
            } else {
        document.write("<p>Esta dirección "+url+" NO es valido</p>");
        }
}
/**
 * Función para validar un código IBAN
 * @param {*} iban 
 */
function validaIBAN(iban){
    let regexp=/^ES\d{2}\s\d{4}\s\d{4}\s\d{2}\s\d{10}/;
    if (regexp.test(iban)) {
        document.write("<p>El código IBAN: '"+iban+"' es valido</p>");
            } else {
        document.write("<p>EL CÓDIGO IBAN: '"+iban+"' NO es valido</p>");
        }
}
/**
 * Función para validar una TARJETA DE CREDITO
 * @param {*} tarjeta 
 */
function validaTarjeta(tarjeta){
    let regexp=/^(5[1-5]\d{2})[\s\-]?(\d{4})[\s\-]?(\d{4})[\s\-]?(\d{4})/;
    if (regexp.test(tarjeta)) {
        document.write("<p>El numero de la tarjeta: '"+tarjeta+"' es valido</p>");
            } else {
        document.write("<p>EL número de la tarjeta: '"+tarjeta+"' NO es valido</p>");
        }
}
validaEmail(correo);
validaUrl(direccion);
validaIBAN(codigo);
validaTarjeta(master);