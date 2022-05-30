/**
 * @author
 * @version
 * @description
 */
//Variable global para un Array de Personas
var cartaClientes=new Array();

window.onload=function(){
    
    document.getElementById("ahorrar").addEventListener('click',dineroAhorra);
    document.getElementById("gastar").addEventListener('click',dineroGastado);
   document.getElementById("listar").addEventListener('click',listarGrupo);
   
}

/**
 * 
 * @param {string} nombre 
 * @param {number} dineroahorrado 
 */
function Persona(nombre,dineroAhorrado){
    this.nombre=nombre;
    this.dineroAhorrado=dineroAhorrado;
  
}
Persona.prototype.getNombre=function(){
    return this.nombre;
}
Persona.prototype.getdineroAhorrado=function(){
    return this.dineroAhorrado;
}

/**
 * 
 * @param {Persona} p 
 * @param {number} cantidad 
 * @returns 
 */
Persona.prototype.gastar=function(p,cantidad){
    return p.dineroAhorrado-cantidad;

}

/**
 * 
 * @param {Persona} p 
 * @param {number} cantidad 
 * @returns 
 */
Persona.prototype.ahorrar=function (p,cantidad){
    return (p.dineroAhorrado+cantidad);

 }
 /**
  * Metodo para Gastar una cantidad introducidad. Previamente debe buscarse la coincidencia del nombre de la persona
  */
function dineroGastado(){
    var p=document.getElementById("persona").value;
    var cantidad=document.getElementById("cantidad").value
    
    cartaClientes.forEach(element=>{
        if(p==element.nombre){
            if(element.dineroAhorrado>=cantidad){
                var totalAhorrado=element.gastar(element,cantidad);
                element.dineroAhorrado=totalAhorrado;
                console.log(totalAhorrado);
                //this.dineroAhorrado=this.dineroAhorrado-cantidad
                console.log(element.dineroAhorrado);
             }else{
                 window.alert("El dinero ha gastar es mayor que el ahorrado")
             }
        }
    })


    
}/**
 * 
 */
function dineroAhorra(){
    var p=document.getElementById("persona").value;
    var cantidad=document.getElementById("cantidad").value;
    cartaClientes.forEach(element=>{
        if(p==element.nombre){
            var totalAhorrado=element.ahorrar(element,cantidad);
                element.dineroAhorrado=totalAhorrado;
                console.log(totalAhorrado);
                console.log(element.dineroAhorrado);
        }
    })
}

/**
 * 
 */
function listarGrupo(){

}


 



/**
 * 
 */
var p1=new Persona("Elena",300);
var p2=new Persona("Alfonso",100)
var p3=new Persona("Luis",2550)
var p4=new Persona("José", 550)
var p5=new Persona("Maria",80)


 cartaClientes.push(p1)
 cartaClientes.push(p2)
 cartaClientes.push(p3)
 cartaClientes.push(p4)
 cartaClientes.push(p5)
