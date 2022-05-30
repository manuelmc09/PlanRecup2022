/**
 * @author
 * @version
 * @description
 */
window.onload=function(){
    document.getElementById("info").addEventListener('click',addInfo,false)
}
/**
 * 
 */
function addInfo(){
    document.getElementById("resultados").innerHTML='<p><b>Resultados Obtenidos</p></b>'
    //Número de enlaces de la página
    var enlaces = document.getElementsByTagName("a");
	
	resultados.innerHTML = resultados.innerHTML 
	+ "Numero de enlaces en la pagina = "+enlaces.length;

    //Número de párrafos de la página
    var parrafos=document.getElementsByTagName("p")
    resultados.innerHTML = resultados.innerHTML +"<br/>"
	+ "Numero de parrafos en la pagina = "+parrafos.length;

    //dirección del antepenultimo enlace
    var mensaje = "El penultimo enlace apunta a: "
	+enlaces[enlaces.length-3].href;
	
	resultados.innerHTML = resultados.innerHTML + 
	"<br/>" + mensaje; 
    //Número de enlaces en el segundo párrafo
    enlaces=parrafos[1].getElementsByTagName("a");
    resultados.innerHTML = resultados.innerHTML +
	"<br/>" + "Numero de enlaces en el segundo párrafo = "
	+enlaces.length;
    document.getElementById("resultados").
	setAttribute('style','background-color:#aabbcc; padding: 10px 10px 10px 10px;border-radius:0.5rem;text-align:center');
}