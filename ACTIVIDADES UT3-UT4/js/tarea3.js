/**
 * @author Manuel Macho Calvín
 * @version 1.0
 * @description Tarea 3 Actividades UT3-UT4
 * Escribir un programa para crear un array con 3 “pizzas” introducidas mediante código. Cada pizza se identifica por un código un nombre y un precio. Posteriormente añade otras dos nuevas 
pizzas al array y muestra por pantalla el número total de pizzas almacenadas y cuales son.Muestra la pizzas de forma ordenada por precio de forma ascendente. Utiliza prototipos
 */
/**
 * 
 * @param {Number} id 
 * @param {String} nombre 
 * @param {Number} precio 
 */
function pizza(id,nombre,precio){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    this._ingredientes=new Array();
}
pizza.prototype.getId=function(){
    return this.id;
}
pizza.prototype.getNombre=function(){
    return this.nombre;
}
pizza.prototype.getPrecio=function(){
    return this.precio;
}

/**
 * 
 * @param {Number} id 
 * @param {String} nombre 
 */
function ingrediente(id,nombre){
    this.id=id;
    this.nombre=nombre;
}
pizza.prototype.addIngredientes=function(i){
    this._ingredientes.push(i)
}
pizza.prototype.listIngredientes=function(){
    document.write("<p>ID pizza: <strong>"+this.id+"</strong> -- >> Ingredientes:</p>")
    this._ingredientes.forEach(element=>{
        document.write("<p>"+element.nombre+",</p>")
    })
}


/**
 * Carta, formado por un conjunto de pizzas
 */
function carta(){
    this._pizzas=new Array();
}
/**
 * 
 * @param {pizza} p 
 */
carta.prototype.addPizza=function(p){
    this._pizzas.push(p);
}
/**
 * 
 */
carta.prototype.longCarta=function(){
    document.write("<h3>Número total de articulos: "+this._pizzas.length+" pizzas</>");
    
}
/**
 * 
 */
carta.prototype.listPizza=function(){
    this._pizzas.forEach(element=>{
        document.write("<p>"+element.id+" "+element.nombre+" >> precio: "+element.precio+" €</p>");
    })
}
/**
 * 
 * @param {Array} c 
 */
 let i=0

carta.prototype.ordena=function(c){
    this._pizzas.forEach(element=>{
        if(c[i]>element.precio){
            return 1;
        } if(c[i]<element.precio){
            return -1;
          }
          return 0;
        
    })
    document.write("<p>"+element.id+" "+element.nombre+" >> precio: "+element.precio+" €</p>");
}


//PRUEBAS Y CREACION DE OBJETOS
var p1=new pizza(1,"MARGHERITA",9.00);
var p2=new pizza(2,"CALZONE NAPOLETANO",12.50)
var p3=new pizza(3,"CARBONARA",12.50)
var p4=new pizza(4,"PROSCIUTTO",11.00)
var p5=new pizza(5,"FOCACCIA SERRANA",13.50)
var cartaVerano=new carta();
cartaVerano.addPizza(p1);
cartaVerano.addPizza(p2);
cartaVerano.addPizza(p3)
cartaVerano.longCarta();
var i1=new ingrediente(1,"Tomate")
var i2=new ingrediente(2,"Mozarella")
var i3=new ingrediente(3,"Salami picante")
var i4=new ingrediente(4,"Albahaca")
var i5=new ingrediente(5,"Ricotta")
var i6=new ingrediente(6,"Huevo campero")
var i7=new ingrediente(7,"Panceta")
var i8=new ingrediente(8,"Jamon York")
var i9=new ingrediente(9,"Burrata")
var i10=new ingrediente(10,"Tomate cherry")
var i11=new ingrediente(11,"Virutas de parmesano")
var i12=new ingrediente(12,"Jamón Serrano")

p1.addIngredientes(i1);
p1.addIngredientes(i2)
p1.addIngredientes(i4)
p2.addIngredientes(i5);
p2.addIngredientes(i2);
p2.addIngredientes(i3);
p3.addIngredientes(i2);
p3.addIngredientes(i6);
p3.addIngredientes(i7);
p4.addIngredientes(i1);
p4.addIngredientes(i2);
p4.addIngredientes(i8);
p5.addIngredientes(i9);
p5.addIngredientes(i10);
p5.addIngredientes(i12);
p5.addIngredientes(i11);

cartaVerano.listPizza();
p1.listIngredientes();
p2.listIngredientes()
cartaVerano.addPizza(p4)
cartaVerano.addPizza(p5)
document.write("<h3><br>Añadimos dos articulos más a la carta..... </h3>")
cartaVerano.longCarta();
cartaVerano.listPizza();
document.write("<h3>Ordenado por precio</h3>")
document.write("<p><br></p>")
cartaVerano.ordena();


