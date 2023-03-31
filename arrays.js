//Areglos
//tipo de datos dentro del mundo de javaScript 
//nos permiten guardar y gestionar informacion, de gran utilidad cuando quieras al macenar muchos dactos
//nombrs de usuarios, compras del supermercado o cualquier otra informacion guardada como un conjunto de dactos.
//Arreglos Listas todas tienen distintas pociciones para guardar un dato, guardar y organizar la informacion.
//contavilizamos los dactos desde el numero 0

//Elemenntos
//Aquellos datos  que hemos guardado Tomate Zanahoria Lecuga total 3 Elementos

//Indices
//Estos no representan el dato en si mismo ,si no la pocicion que se esta guardando.
var listaDeCompras=[];
listaDeCompras[3]="tomates"
listaDeCompras[1]="lechuga"
listaDeCompras[2]="pepinos"
var elementoDelArray =listaDeCompras[3];
console.log(elementoDelArray);

//herramientas 
//Metodo Length
//Este metodo nos permite saber cuantos Elementos contienen un Arreglo es decir cual es su Estencion
console.log(listaDeCompras.length)


//Metodos de Arrays
//Arreglos
//objeto global dentro de Javascript, todos los arreglos  estan asociados a una  serie de metodos
//fuciones nativas/preestablecidas en los lenguajes  de programacion
var colores=["amarillo", "azul"]
colores.push("rojo");//agregamos nuestro nuevo elemento al final 
colores.unshift("verde");//agregamos nuestro nuevo elemento al inicio
colores.pop();//eliminamos nuestro ultimo elemento 
colores.shift();//eliminamos nuestro primer elemento
console.log(colores);

//Metodo INCLUDES
//determinamos si un arreglo incluye o no incluye  un elemento devolvendo un valor booleano tru o false
var pintores=["Calviche","Jose","Angel", "Raul"];
var incluyeRaul = pintores.includes("Raul");
//console.log(incluyeRaul);

//Areglo de numeros quisiera saber si todos son mayores a 5
var numeros=[10,7,6,8,9];
var cumpleconDicion=numeros.every((num)=>{
    return num >5;
});  
console.log(cumpleconDicion);

//Estos metodos nos permiten transformar Strings en Arreglos arreglos en string
//Metodo SPLIT Separar 
 var palabra ="Yo aprendo a programar muy rapida";
var palabraSeparada=palabra.split('');// esto le indica al metodo  que queremos que separe la palabra por cada caracter  si dejamos espacio enre las collillas separa el string en por cada espacio que alla  si escribieramos la letra x separa toda las x que encuentre 
palabraSeparada.pop();//eliminamos el ultimo elemento
palabraSeparada.push("o");//Cambiamos el ultimo lemento
//console.log(palabraSeparada); //ahora nuestra palabra se convirtio en un arreglo donde cada elemento es un caractes de la palabra Yo aprendo a programar rapido

//Metodo JOIN Unir 
var palabraArreglada=palabraSeparada.join("")//de esta manera junta todos los caracteres dejando o no su respectivo espacio
console.log(palabraArreglada);

//Metodo forEach
var numeros=[1,2,3,4];
numeros.forEach(num => console.log(num));// Imprimimos los elementos cada uni de manera individual.
numeros.forEach(num=> {if(num===4){console.log(num)}});//Imprimimos el elemento definido p expecifico de manera individual pero no ara cambios sobre el mismo para realizar cambios usamos MAP.
//Metodo MAP
var masUno= numeros.map((num)=> {return num+1});//Nos imprime el mismo elemento pero a cada elemento le suma 1 
console.log(masUno);
// ¿sabías que existen aún más métodos? ¡Así es! Existen más de 40 métodos que puedes utilizar para realizar operaciones complejas de una manera mucho más sencilla. 
//Existe una página web llamada Mozilla Developer en la que podremos encontrar toda la documentación, información y ejemplos sobre JavaScript. En esta ocasión te compartimos todos los métodos de arreglos en JavaScript(opens in a new tab). Podrás encontrar el listado en la columna izquierda de la página.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array


//Bucles en  Arreglos
//Un blucle es una secuencia  de instruciones a la que se asigna  una  condicion, este codigo se ejecutara hasta que la condicion  asignada deje de cumplirse
//LAVAR LOS PLATOS Condicion Limpiar todos los platos 
//1Agarrar el plato sucuio
//2pasarle el jabon
//3mojarlo 
//4secarlo


//Bucle For
//trabaja  con un numero determinado de repeticiones, El bucle se repetira una ves por cada elemento que el arreglo tenga 
var arr=[1,2,3,4,5];
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
};

function encontrarLetraP(string){
    var letras=string.split("");
    for(let i=0; i<letras.length; i++){
        if(letras[i]==="p"){
            console.log("Lo lograstes Andres Felizidades contiene la letra p");
        }
    }
}

encontrarLetraP("JavaScript");
encontrarLetraP("paris");

//Bucle While Trabaja con condiciones  especificas mientras las condiciones que expecifiquemos se cumpla el bucle segira ejecutandose
//esto nos permitira repetir la  msima tarea muchas veces en poca linea de codigo.
var arr=[];
while(arr.length<5){
    arr.push("LIBERTAD");
}
console.log(arr);
//Conclucion  Ladiferencia principal enre For & While es la exprecion de control que le permite  a cada uno mantenerce ejecutando

//Bucle Infinito
//Seproduce cuando el bucle comienza a ejecutarse pero jamas termina de hacerlo nunca llega a una condicion de quiebre
//Ejemplo esto hace que nos quedemos sin memoria de procesamiento esto se debe que encada iteracion de este  bucle la condion n no cambia por qlo que esto se ejecutara de manera infinita esto consume muchos recursos de la computadora 
//siempre que ocurra esto debo pensar por que no se cumple la funcion que plantie?, deque manera puedo resolverlo?
//var arr=[];
//while(n<3){
  //  arr.push(Math.random());
//}
