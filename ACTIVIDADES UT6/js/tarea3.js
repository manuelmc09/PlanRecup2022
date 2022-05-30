/**
 * @author
 * @version
 * @description
 */


window.onload=function(){
   
    var x=document.getElementsByTagName("span")
    var bye=x[0]
    bye.addEventListener('click',adios)
    document.getElementById("hello").addEventListener("mouseover", hola);
  

}
/**
 * 
 */
function adios(){
    window.alert("Bye, bye")
}
/**
 * 
 * @param {*} event 
 */
function hola(event) {
    window.alert("Hellou,hellou");
    document.getElementById("hello").removeEventListener("mouseover", hola);
}


