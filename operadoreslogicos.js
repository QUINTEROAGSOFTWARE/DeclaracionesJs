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
    if(permiso!== console.log(false)) console.log("Tiene permiso2");
};
negacion(false);


//Funcion condicioncompleja
function condicionCompleja(num){
    if (num > 9 && num %2 ===0 || num === 3) console.log(true);
    else console.log(false);
};
condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);

//¿Alguna vez escuchaste el término veracidad? Como el nombre lo indica, refiere a la verdad de algo. Es decir, si es verdadero o falso.
//su forma de procesar lógica se basa en un sistema binario. Unos y ceros. Verdaderos y falsos. 
//Es por esto que absolutamente todos los datos dentro de este lenguaje pueden ser resumidos a estos dos valores. 

//Utiliza la función Boolean() e ingresa cualquiera de los siguientes valores para comprobar cuál es su veracidad:
1 //ture
0 //false
-1 //true
true //true
false //false
"string"//true
null //false
undefined//undefined
//[]true