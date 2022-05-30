/**
 * @author Manuel Macho Calvín
 * @version Mayo 2022
 * @description
 */



window.onload=function(){
    document.getElementById("tarea2").addEventListener("click",addElemento);
    document.getElementById("tarea2").addEventListener("click",pintarRojo);

    

    /**
     * 
     */
    function addElemento(){
        var li=document.createElement("li");
        li.innerHTML="BBDD";
        document.getElementById("tarea2").appendChild(li)
    }
    /**
     * 
     */
    function pintarRojo(){
        var lista=document.getElementById("tarea2");
        var nodos=lista.childNodes;
        let pintado=false;
        const attr=document.createAttribute("class");
        attr.value="rojo";
        for (i = 0; i <= nodos.length && !pintado; i++) {
            nodos[i].setAttributeNode(attr);
        }
    }
   
}

