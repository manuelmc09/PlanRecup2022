/**
 * @author Manuel Macho Calvín
 * @version 1.0 Tarea 4 Actividades UT2-Plan de Recuperación JUNIO 2022
 * @description Realiza un programa haciendo uso de JavaScript para que dos personas puedan jugar al Master Mind. 
En primer lugar, el ordenador pedirá una combinación secreta que consistirá en 4 números y que tecleará una de las personas. Después, la otra persona deberá adivinar dicha combinación secreta para lo que dispondrá como máximo de 8 intentos. Cada intento consistirá en escribir 4 números, tras lo cual el ordenador escribirá el número de muertos y de heridos. 
1. Un número está muerto si coincide en valor y en posición con la combinación secreta. 
2. Un número está herido si coincide en valor, pero no en posición con la combinación 
secreta. 
Por ejemplo: si la combinación secreta es (5 3 1 2), en el intento (5 1 4 4) hay 1 muerto (el 5) y un herido (el 1). Según esta definición en el intento (5 1 1 2) habría 3 muertos (el 5, el segundo 1 y el 2) y 1 herido (el primer 1). 
El programa terminará por una de las dos siguientes situaciones: 
a) El jugador ha acertado la combinación escrita por el otro o 
b) Se ha llegado a 8 intentos sin acertarla
 */
//variable que almacena el jugador uno
var jugador1;
var jugador2;
var num;
var array=[];
var miarray=[];
var tuarray=[];
var intentos=0;
jugador1=window.prompt("Introduzca el nombre de jugador 1");

/**
 * Funcion para crear la combinación de números y grabarlos en un array
 */
function llenararray(array){
    for(let i=0;i<4;i++){
        num=window.prompt("Por favor teclee 4 numeros.....")
        array.push(num)
    }
    window.alert("Se ha grabado la combinación de numeros correctamente");
    console.log(array);
}

llenararray(miarray);
jugador2=window.prompt("A continuación el jugador 2 introducirá su nombre");

//aciertos();
//bucle do-while para juara 8 partidas o hasta que el jugador 2 acierte la serie
do{
    llenararray(tuarray);
    for(var i=0;i<miarray.length;i++){
        var index=miarray.indexOf(tuarray[i]);
        if(index==0){
                console.log(tuarray[i]+" Esta en la posición  "+index)
        }else if(index==1){
            console.log(tuarray[i]+" Esta en la posición  "+index)

        }
        else if(index==2){
            console.log(tuarray[i]+" Esta en la posición  "+index)
        }else if(index==2){
            console.log(tuarray[i]+" Esta en la posición  "+index)
        }else{
            console.log(tuarray[i]+" no está en ninguna posición ")
        }

    }
    
    intentos++;
    console.log(intentos);
    tuarray.length=0;

}while(intentos!=8)
//document.write("<h3> Se han producido " + numaciertos + " aciertos</h3>");

/**
 * 
 * @returns 
 */

function aciertos(){
    let coincidencias=0;
    let index=miarray[i];
    for(i=0;i<=miarray.length;i++){
        if(tuarray.includes(miarray[i])){
            coincidencias++;
            
        }
        if(miarray.indexOf(tuarray[i])>=0){
            console.log("La coincidencia está en la posición : ");

        }
        
    }
    
    if(coincidencias==1){
        document.write("<p>Hay "+coincidencias+" coincidencia</p>");

    }else{
        document.write("<p>Hay "+coincidencias+" coincidencias</p>");
    }
}




