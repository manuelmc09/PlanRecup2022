/**
 * @author Manuel Macho Calvín
 * @version 1.0 Tarea 1 Actividades UT3 - UT4-Plan de Recuperación JUNIO 2022
 * @description Realizar una página web en un único documento html, en el que se generen de forma aleatoria los partidos que disputaran 5 jugadores de tenis. Mostrar los resultados en formato tabla, estilo al ejercicio de la quiniela de futbol que se hizo en la evaluación pasada. Incluir estilo css es opcional.

 */
var jugador1;
var jugador2;
var jugador3;
var jugador4;
var jugador5;
var partido;

document.write("<h2>Resultados Torneo Tenis</h2>")
function jugarPartido(partido){
    for(var i=1;i<=20;i++){
        var resultado=Math.floor(Math.random()*100)+1;
        if(partido==1){
            if(resultado<=50){
                document.write("Partido: "+i+" gana jugador "+ "1 </br>")
            }else if(resultado<=80){
                document.write("Partido: "+i+" gana jugador "+ "2 <br>")
            }
        }
        
    }
   
}
jugarPartido(1);
jugarPartido(2)

