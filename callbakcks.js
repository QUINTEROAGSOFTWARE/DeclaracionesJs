//Las  fuciones calbacks son un tipos de fuciones que se pasan por parametro a otras funciones.
//FUNCION1 FUNCION2 cuando la funcion1 ejecuta ala funcion2 en su interior existe un proceso llamado CALBACKS, estos son muy utiles en el mundo de la programacion. Nos aseguran que una funcion no se va a ejecutar antes de que se complete una tarea  si no que se ejecutara justo despues de que la tarea se halla  completado
//Ejemplo Devuelvo Usuario
var devuelvoUsuario=function(){
    return 'Jhorlady';
};
var devuelvoSaludo=function(){return "Hola ";
};
var saludar=function(cb1, cb2){
    return cb1()+""+cb2();
}
 var resultado=saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);

let devuelvoFrase=function(comida){
    return "Hoy quiero comer: "+ comida;
}

var hablar=function(comida, cb){
    return cb(comida);
};

var fraseFinal=hablar("Hamburgesa", devuelvoFrase);
console.log(fraseFinal);