function mayorMenor(num){
    if(num > 5 && num < 10)console.log(true);
    else console.log(false);
}
mayorMenor(1);
mayorMenor(8);


function mayMenPar(num){
    if(num > 5 && num < 10 && num % 2===0)console.log(true);
    else console.log(false);
}
mayMenPar(7);
mayMenPar(8);
//de esta forma agregaremos la cantitad de condiciones que queramos en cuanto no se cumpla alguna toda la combinacion de condiciones se evaluara como false.

//OPERADOR OR
function operadorOr(str){
    if(str === "Andres" || str<2) console.log(true);
    else console.log(false);
}
operadorOr("Andres");
operadorOr("JavaScript")
operadorOr("A");


//Operacion  De Negacion

function negacion(permiso){
    if(permiso) console.log("Tiene permiso1");
};
negacion(true);

function negacion(permiso){
    if(!permiso) console.log("Tiene permiso2");
};
negacion(false);