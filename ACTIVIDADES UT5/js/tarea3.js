/**
 * @author
 * @version
 * @description
 */

 var ret=new Array();
const operacionesUsables=['+','-','*','/'];

window.onload=function(){
   
    var botones=document.getElementsByClassName('btnDigito');
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', añadeNumero);
      };
    var operaciones=document.getElementsByClassName('btnOperador');
      for (var i = 0; i < operaciones.length; i++) {
        operaciones[i].addEventListener('click', añadeNumero);
        }
    document.getElementById('igual').addEventListener('click',mostrarResultado);
  
 
    document.getElementById('c').addEventListener('click',limpiarMemoria)

   var operaciones=document.getElementsByClassName('boton');
   for (var i = 0; i < operaciones.length; i++) {
    operaciones[i].addEventListener('click', cargarMemoria);
  };
 

}
 
/**
 * 
 */
function añadeNumero (){
    var element=document.getElementById(this.id);
    var numero=element.value
    var valormemoria="";
    var operacion;
    document.getElementById('resultado').innerHTML+=numero

}
/**
 * 
 */
function cargarMemoria(){
    var e=this;
    //var valor=document.getElementById('resultado').innerText;
   /*  if(ret!=="undefined"){
        var ultimo=ret.length>0 ? ret[ret.length-1]:null;
        console.log(ultimo)
        if(operacionesUsables.includes(ultimo,ret.length)){
            ret.push(e.value);
        }
    
    console.log(ret);
    } */
    if(ret!=="undefined"){
        ret.push(e.value);
        console.log(ret)
      
    }

}
/**
 * 
 */
function limpiarMemoria(){
    document.getElementById('resultado').innerHTML=""

}

/**
 * 
 */
function mostrarResultado(){
var op=document.getElementById('resultado').innerText;
var div=ret.find(o=>o=='/');
var mul=ret.find(o=>o=='*');
var sum=ret.find(o=>o=='+');
var res=ret.find(o=>o=='-');
//var operador1=op.findIndex(div);
//var a=op.substring(operador1)
//console.log(a)
const operadorencontrado = operacionesUsables.filter(val=>ret.includes(val));

console.log(operadorencontrado);
var posicionOperador=ret.indexOf(operadorencontrado);
console.log(posicionOperador)


}
