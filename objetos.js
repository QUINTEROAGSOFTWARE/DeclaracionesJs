//OBJETO  estos tambien son una estructura  en la que se puede guardar todo tipo de informacion e incluso funcionalidades.
//la principal diferencia es la forma en que organizamos esa informacion osea que permiten ser mas especificos
//var miObjeto={};
var deportes ={
    conBalon:["football", "basketball"," ruby"],
    sinBalon: ["Boxeo", "surf", "trekking"]};
    //Trabajando con objetos  Estructura coon forma key:value, Asignar propiedades  y valores
    var persona ={nombre:"Felipe",edad:26,estudios:{esFullStack: true}};// ahora tenemos un objeto dentro de otro objeto


//Dot-Notacion: Notacion por punto .

console.log(persona.estudios); // lo que hacemos es acceder alas propiedades de este objeto, supongamos que queremos saber los estudios de este para acceder a la propiedad de un ojebto escrbimos: nombre del objeto seguido de un punto & el nombre de la propiedad.
persona.nombre="Andres";// para cambiar las propirdades del objeto  en este caso seria el nombre 
console.log(persona.nombre);
persona.edad=20;//en este caso cambiamos la edad
console.log(persona.edad);
//PROPIEDADES siempre deben tener un asignado un valor
var autos ={};
autos.marcas=["Ford","Audi","Ferrari"];//creamos la propiedad y el valor si no existe si existe le reasignamos un valor
delete autos.marcas;//Eliminamos el valor de la propiedad  actual
console.log(autos);
//Particulidaridad dentro de la propiedad de un objeto podemos guardar una funcion de esta forma podemos 
var misFuciones ={
    saludar() {
        console.log("Hola")},
    };
    misFuciones.saludar();
//Bracket-Notacion: Notacion por corchetes [];
var autuendos={manos:["Guantes", "Anillos"],pies:["Zapatos","Medias"]};
console.log(autuendos.pies);
autuendos["piernas"]=["Bermudas","Pantalones"];//agregamos a nuestro objeto, 
console.log(autuendos);
//Bracket-notacion tiene una particularidad que la dot-notacion no tiene 
var comidas={};
var diferenciaDeNotaciones=function(propUno, propDos){
    //comidas.propUno=['Frutas', 'Vejetales'];
    comidas[propUno]=['Frutas', 'Vejetales'];//De esta manera las dos propiedades tienen el nombre que indicamos desde el principio
    //comidas["propDos"]=['Hamburgesa','Papas Fritas'];//Esta forma toma las propiedades y las agrega literal mente y no el valor que nosotros planteamos
    comidas[propDos]=['Hamburgesa','Papas Fritas']// de esta manera le indicamos a javasript que el nombre de la propiedad sera la variable propDos y no estara imprimiendo literal mente 
};
diferenciaDeNotaciones("saludables","noSaludables");
console.log(comidas);
//Muchas veces nos puede suceder que necesitamos unetizar una varieble externa para guardalas como pripiedad en un objeto, es importante que en esos casos recordemos utilizar bracket-notacion sin comillas para que funciones correcta mente


//OBJETOS AVANZADOS
//OBJECT objeto global que extiende diferentes metodos a los objetos
//los metodos son funciones pre definidas  de este lenguaje que nos permite realizar tareas de manera mas cencilla 

//hasOwnProperty :tarduce en ingles tiene su propiedad este metodo nos permitira saber si este metodo tiene una propiedad espesifica la respuesta a esta pregunta es un valor boolean recibiremos tru o false ejemplo
var  libro={ autor:"Andres",genero:"Militar", ano:2017-2021};
var tienePropiedad=libro.hasOwnProperty("nombre"); //retornara false
//var tienePropiedad=libro.hasOwnProperty("autor");//retornara true
console.log(tienePropiedad);
//Metodo Keys este nos devuelve un arreglo con el nombre de todas las propiedades de un objeto
var todasLasPropiedades=  Object.keys(libro);
console.log(todasLasPropiedades);//este nos devolvera un arreglo solo con el nombre de las propiedades de nuestro objeto.

//Bucle For in
var mundo ={continentes:7, paises:195, oceanos:5};
for(var prop in mundo){
    console.log("Esta es  la propiedad: " + prop)
    console.log("Este es el valor: "+ mundo[prop]);
};
//Remember diferencias entre el bucle for  y for in estos dos bules solo tienen en comun un nombre similar
//Bucle for sirve unica mente para recorrer arreglos elementos por elementos
//Bucle for in sirve unica mente para recorrer objetos propiedad por propiedad  

//OBJETO THIS
//cuando hablamos de este hacemos referencia a un contexto una funcionalidad particular referenciada al contexto
//Ejemplo
var  mascota ={
    animal: "Gato", 
    raza:"felino", 
    amistoso:true, 
    duena:"Olivia usuriaga",
    info:function(){
        console.log("Mi gato es"+ this.raza);//El this antes del contexto le informa a la funcion que el contexto al que hacemos referencia es un objeto 
    },
};
mascota.info();
//object = hasOwmProperty
//Bucle for & for in
//this=palabra reservada que nos permite cambiar el contexto en el que estamos trabajando