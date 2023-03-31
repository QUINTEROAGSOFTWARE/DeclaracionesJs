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
var palabraArreglada=palabraSeparada.join("")//de esta manera junta todos los caracteres dejando o no su respectivo espacio
console.log(palabraArreglada);

var numeros=[1,2,3,4];
numeros.forEach(num => console.log(num));
//Metodo JOIN Unir 
