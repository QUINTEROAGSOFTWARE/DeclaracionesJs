// suma
3+5;

//Resta
3-5;

//Multiplicacion
3*5;

//Divicion
3/5;

//Modulo
3%5;

//Imprimir en consola 
console.log(3+5)
console.log(3%5)


//Precedencia de operaciones tabla de valores JavaScript
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#tabla
 console.log(3+5*2-8);
 // primero multiplica luego suma y resta
 
 //Agrupacion de terminos
 console.log((3+5)*2-8);
 //agrupacion de operacion primaria  luego multiplica y por ultimo resta

 //Adicion con strings: Los operadores  no solo van a aplicarse a numeros. por ejemplo, el operador de adicion + nos va  a permitir concatenar el strings
 //Ejemplo #1 
 console.log("Hola " + "Andres");
 //Ejemplo#2
 var nombre = "Andres"
 var saludo = "Hola" + nombre;
 console.log(saludo);

 //Operadores de comparacion
 //Operadores Relacionales son identicos a los que definen las matematicas
 // > Mayor que
 // < Menor que
 // >= Mayor o igual
 // <= Menor o igual
 // == Igualdad
 // != Diferente
 // Estos devuelven un valor Booleano para indicar cual es la respuesta es true o false
 //Ejemplos 
 console.log(25<50);
 console.log(4<1);
 console.log(4>4);
 console.log(4== 7);
 console.log(4==4);

 // = Asignacion
 // == Igualdad ===
 //Ejemplos
 var nombre = ("Felipe");
 console.log(nombre);
 3 == 3 //
 3 === 3 //Tipo de dato Numerico
 3 =="3" //Tipo de dato false
 3 ==="3" //Valor true Abstract Equality Comparision

 //Asociatividad
 //Ejemplo 
 var a = 1;
 var b = 2;
 var c = a =b; //Mismo valor de precedencia primero se ejecuta a=b luego c=a
 console.log(a);// valor2
 console.log(b);// valor2
 console.log(c);// valor2
 //Ejemplo divicible
 console.log(16/2/4);



