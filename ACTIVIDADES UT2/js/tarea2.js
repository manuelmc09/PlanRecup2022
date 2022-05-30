
/**
 * @author Manuel Macho Calvín
 * @version 1.0 Tarea 2 Actividades UT2-Plan de Recuperación JUNIO 2022
 * @description Realiza un juego sencillo para jugar contra el ordenador. Se solicitará el nombre al usuario, será su nombre como jugador. El usuario introducirá un número entre 1 y 20, el ordenador sacará un número de forma aleatoria entre 1 y 20. Si la suma es par gana el jugador, si la suma es impar gana el ordenador la partida. Cada partida ganada se suma 1 punto a quien corresponda (usuario u ordenador). 
Ganará el que más puntuación obtenga en las 5 partidas. Al finalizar se mostrará el ganador y el total de puntos en la página web.
 */


//variable para almacenar  el nombre de usuario
var usu=window.prompt("Introducir el nombre de usuario ");
//variable para almacenar el numero que introduce el usuario
var numero;
//variable para almacenar el número aleatorio de la computadora
var aleatorio
//variable que almacena la suma de los dos anteriores
var suma=numero+aleatorio
/**
 * Función que obtiene un número aleatorio entre 1 y 20
 * @param{}
 */
function numaleatorio(){
    aleatorio=Math.floor((Math.random()*20)+1);
    console.log(aleatorio);
    console.log(isNaN(aleatorio))

}
window.alert("A continuación el usuario '"+usu+"' introducira 5 numeros consecutivamente para jugar contra la máquina")
/**
 * Función que pide un numero al usuaro entre 1 y 20
 * @param{}
 */
function pidenumero(){
    do{
        numero=window.prompt("El usuario '"+usu+"' introducirá un número entre 1 y 20 ");
        if(numero==null ){  //Se ha pulsado cancelar
            document.write("<h2>Ha cancelado la operación</h2>")
        }
        else if(numero==""){    //No se ha introducido ningún valor
            window.alert("No has introducido ningún número ");
        }else if(Number(numero)<1 || Number(numero)>20){    //Numero fuera del rango
                window.alert("Has introducido un número fuera del rango pedido. Intente de nuevo por favor");
        }else{  //numero en el rango pedido
            console.log(numero);
            console.log(isNaN(numero))
            break;
            
        }
    }while(numero!=null);   //mientras no se haya pulsado cancelar
   
}
/**
 * Funcion para jugar entre usuario y maquina. El resultado de la suma podrá ser par o impar, ganando 1 punto la máquina si es impar y 1 punto el usuario si es par. Ganará el juego a mayor puntuación de 5 partidas
 */
function juego(){
    var ganausuario=0;
    var ganamaquina=0;

    //bucle para controlar el juego a 5 partidas
    var jugadas=5;
    for(var i=0;i<jugadas;i++){
        //pedir numeros al usuario y aleatorio para jugar
        pidenumero();
        numaleatorio();
        console.log(isNaN(suma))  
        var s1=parseInt(numero)
        console.log(isNaN(s1))
        var s2=parseInt(aleatorio)
        console.log(isNaN(s2))
        var suma=(s1+s2)
        var s=parseInt(suma)
        if(s%2!=0 && s!=0){
            ganamaquina++;
            document.write("<p>La suma es impar: "+s+"</p>")

        }else{
            ganausuario++;
            document.write("<p>La suma es par: "+s+"</p>")
        }
    }
       
if(ganamaquina>ganausuario){
    document.write("<h2>Ha ganado la máquina con una puntuación de "+ganamaquina+" puntos.</h2>");
}else{
    document.write("<h2>Gana el usuario ''"+usu+"'' con una puntuación de "+ganausuario+" .</h2>")
}
}
juego();
