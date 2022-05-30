/**
 * @author Manuel Macho Calvín
 * @version 1.0
 * @description Tare 5 
 */

 class Poligono{
    constructor(altura,anchura){
        this.altura=altura;
        this.anchura=anchura;
    }
    calcula_area(){
        return this.altura*this.anchura
    }
    get area(){
        return this.calcula_area();
    }
}
/**
 * Calcula el area del poligono
 * @returns 
 */
Poligono.prototype.calcula_area=function calcula_area(){
    return this.altura*this.anchura
}

var al=window.prompt("Introduce la altura del poligono");
var an=window.prompt("A continuación la anchura del poligono")
var poligono=new Poligono(al,an);
document.write("<h2>El area de este poligono es: "+poligono.area+".</h2>")