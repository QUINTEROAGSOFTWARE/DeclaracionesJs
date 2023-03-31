//Clases: Conjunto de datos que pertenecen a una entidad. plantillas o modelos de una entidad.
//Entidades: Reprecentacion de conceptos del miudo real.
//Frace ANIMALES Ojos, Color, Habitat concepto base  para representar animales del mundo real.

//Sintaxis Funcion Costructora
//Platillla de un auto
function auto(puertas,color,marca,date,ruedas){
    this.puertas=puertas;
    this.color=color;
    this.marca=marca;
    this.date=date;
    this.ruedas=ruedas;
    
    //Como agregar metodos a una clase 
    //Queremos que nuestros autos tengan un metodo que nos de informacion aserca de la instancia
    this.information=function(){
        console.log("Este es " + this.marca+" de color"+this.color);
    };// de esta manera agregamos metodos  a una clase
}

var miPrimerAto=new auto(4,"Morado", "Tesla" ,2023,4);
console.log(miPrimerAto);
console.log(miPrimerAto.marca);
miPrimerAto.information ();
//Sintaxis Exprecion de clase 
//Su logica es similar  a la funcion constuctora solo que esta sintaxis es mas censilla a ala vez

class motos{
    constructor (espejos,direcionales,marca,date,ruedas){
    this.espejos=espejos;
    this.direcionales=direcionales;
    this.marca=marca;
    this.date=date;
    this.ruedas=ruedas;
} 
    information(){
        console.log("Esta es una "+this.marca+" de color "+this.color);//this nos permite indicarle al codigo de que contextodebe obtener informacion esto lo podemos visualizar utilizando clases 
    } 
}

var misMotos = new motos(2,4,"BMW",2023,2);
console.log(misMotos);
console.log(misMotos.marca);
misMotos.information();
//Ejemplo de clases football
class football{
    constructor(jugador){
        this.jugador = jugador;
    }
    obteberNombre(){console.log(this.jugador);
    }
}
 var colombia=new football("Yerri mina")
 var argentina=new football("Messi")

 colombia.obteberNombre();
 argentina.obteberNombre();