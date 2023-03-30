//Operadores  condicionales; Permiten que se cumplan unas u otras instruciones dependiendo de alguna condicion
//Operador if Ejemplo

function viajar(destino){
    if(destino === "Brasil"){ // if nos indica que acontinuacion tenemos un condicional parentecis dentro de los cuales escribimos nuestra condicion esta siempre  se resume en boolean
        console.log("Gire a la IZQUIERDAD");// si es true se ejecuta lo que se encuentra dentro de las llaves caso contrario  se salta este codigo y continua con el codigo siguiente
    }else if(destino === "Argentina"){ //else if  nos permite avisarle que hay una funcion mas
            console.log("Gire a la DERECHA");//podremos repetir la sentencia else por cada condicion if que tengamos inclus combinarlas else if
    }else{// else en el caso de una sola condicion no lleva if
        console.log("Nos PERDIMOS");
    }
}
viajar("Argentina")

function puedeManejar(edad){
    if(edad >= 18){
        console.log(true);
    }else{
        console.log(false);
    }
}

//CONCLUCION
//nuestro codigo toma distintos caminos dependiendo de ciertas condiciones, como se extuctura y anida las mismas
