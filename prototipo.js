//PROTOTIPOS: estos son un mecanismo por el cual  todos los objetos o elementos de javascript pueden extender sus propiedades o metodos
//sabemos que existe un tipo de dato llamado array que proviene de un objeto global  llamado array este objeto global le extiende mediante su prototipo propiedades y metodo al tipo de dato array lo mismo ocurre co los objetos los string numeros e incluso con las clases  que nosotros podemos crear.
//el proceso en el que los objetos globales de javaspcript le extienden metodos y propiedades a cualquier tipo de dato se denomina HERENCIA
//Ejemplo  lo que ara este metodo es tranformar todos los numeros mayores a 10 que tenga un arreglo en el valor boolean false
Array.prototype.mayoresQueDiez=function(){
    var arregloModificado=[];
    for(let i=0; i< this.length; i++){
        if(this[i]> 10){
            arregloModificado.push(false);
        }else{
            arregloModificado.push(this[i]); 
        }
    }
    return arregloModificado;
};
 
var arreglo=[1,2,3,4,5,6,7,8,9,10,11,12,14,16];
var nuevoArreglo=arreglo.mayoresQueDiez();
console.log(nuevoArreglo);

//LATINOA AMERICA
class latinoAmerica{
    constructor(){
        this.paises=[];
    }
}
latinoAmerica.prototype.agregarPais=function(pais){
    this.paises.push(pais);
};

var continente=new latinoAmerica();
continente.agregarPais("E.E.U.U");
console.log(continente.paises);

// estos le permiten a los objetos de javascript heredar propiedades y metodos  a otros elementos como por elemplo a otros objetos 
//podemos usar estos prototipos para acceder al  constructor de una clase y agregar metodos