//Concepto de fuciones 
//Sintaxis de una funcion
//palabra reservada = function
//nombre de la funcion = sumaTres
//Argumento o parametro = (x)
//Cuerpo de la funcion = { }

//Ejemplo 1 invocamos la funcion  retornamos
//f(x) = x+3 
// x =5 return 8

//Ejemplo1 basico
function sumaTres(x){
    return x + 3;
};
//Ejemplo 2 guardamos la funcion dentro de la variable
var sumaTres = function(x){
    return x + 3;
};
//Ejemplo 3  Funcion de flecha 
var sumaTres = (x)=>{
    return x + 3;
};

//Errores comun: confundir  return y console.log();
//console.log(); Nos da una ayuda visible sobre el valor de una variable  o el valor de una linea de codigo
//Ejemplo1
var animal  ="caballo";
console.log(animal) //Ninguna aplicacion o programa real deveria tener un console.log(); dentro de su codigo solo ayuda para imprimir en consola luego eliminarla
//Ejemplo2
function CuidadoConElConsoleLog(nombre){
    console.log(nombre)
    
}

function otraFuncion(){
    return (
        "El nombre retornado por la funcion 'CuidadoConElConsoleLog' es"+
        CuidadoConElConsoleLog("Andres")
    );
}

function CuidadoConElReturn(nombre){
    return nombre;
    console.log(nombre); 
}
//RESUMEN: 
// todo lo que se encuentra por debajo del return no se va a ejecutar
//FUNCIONES bloques de codigo que podemos ejecutar y nos retornan algun valor como resultado si no definimos el valor a retornar por defecto se retorna undefine
//PARAMETROS palabras claves que nos permiten introducir informacion externa  dentro de una funcion puede recibir uno o muchos parametros 
//No debemos usar console.log(); mas que ayudarnos a la hora de programar

//Nombrando Funciones
//camelCase : La union de dos o mas palabras sin espacio pero diferenciando la letra inicial Mayuscula apartir de la segunda palabra
//PascalCase : Similar ala anterior pero la primera frase tambien inicia con Mayuscula
//snake_case : Las letras siempre  serán minúsculas y las  palabras están separadas por un guion bajo

