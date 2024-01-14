
alert("esto es una alerta putito")







//existen 3 maneras de escribir variables => var no se usa, pero existe

//LET Y CONST


    //let => se utiliza para declarar variables que pueden ser reasignadas 
    //tiene un hambito, significa que la variable solo es valida dentro de el bloque donde se declara

//ESTRUCTURA DE UNA VARIABLE

          //camelcase -> o joroba de camello, es una manera que tenemos estandarizada los programadores para escribir codigo.
               //let nombreDeLaVariable = valor;

    // una variable tiene valor, que tipos de valores podemos encontrar en una variable;;

        let numero = 15; //number
        let cadenaDeTexto = "EZEQUIELSALAZAR"  //string
        booleanos = true; //un booleano se va a determinar si algo es verdadero o falso



//que mas se puede alojar en una variable?
    //arreglos o arrays
    //objeto o objet
    //nulo o null
    //indefinido o undefined
    //funciones o functions


//const o constante => se utiliza esta variable cuando el valor no necesita ser reasignado, valor que se mantiene en el timepo.
//al igual que let, const tambien va a vivir en el bloque de codigo en el cual se cree

    //snake_case = es una convencion que tambien utilizamos en el desarrollo de aplicaciones. (para nombrar variables)

    const EZEQUIEL_SALAZAR = "EZEQUIEL SALAZAR"

//declaracion e inicializacion 

//declaracion

    //estoy reservando simplemente el nombre de la variable y no le asignamos un valor
    //despues nosotros podemos inicializarlo cuando queramos

// let edad;  






let longitud = cadenaDeTexto.length;

console.log("longitud del tring" + " " + longitud);
















//inicializacion => es el proceso en el cual asignamos el valor inicial de la variable 

    let edad;

    edad = 25;

//las variables tienen que tener asignado un nombre que haga referenca al dato almacenado


//var lo que tiene de malo es que no respeta el scoupe, ya que la variable es 100% global.



//console.log => es una funcion de javascript que lo que hace es imprimir menajes en la consola del navegador
//en entornos en donde se ejecute javascript
    let NumeroUno = 6 ;
    let NumeroDos = 5 ;
    //invocando a el valor de la variable

    console.log(NumeroUno);

// operaciones basicas dentro de js
//son las operaciones aritmeticas

     //una variable puede contener dentro mas variables

let suma = NumeroUno + NumeroDos;

let resta = NumeroUno - NumeroDos;

let multiplicacion = NumeroUno * NumeroDos;

let divison = NumeroUno % NumeroDos;
console.log(divison)
console.log(multiplicacion)
console.log(resta)
console.log(suma)


let resto = NumeroUno % NumeroDos;
console.log(resto);
     /* 

concatenacion=> es cuando nosotros podemos unir valores de tipo string alojados en variables
*/

let nombre ="ezequiel";
let apellido="salazar";

let NombreCompleto = nombre +" "+ apellido;

console.log(NombreCompleto)

//prompt consola alert

//prompt => funcion que nos va a mostrar un cuadro de dialogo con el cual va a interactuar el usuario

let name = prompt("ingrese su nombre");
let lastname =prompt("ingrese su apellido");

let CompleteName = name + " " + lastname;
console.log("hola como estas?" +CompleteName)
console.log(name)


//alert => tambien es una funcion de js que nos muestra un cuadro de dialogo 

alert("hola, como estas?", CompleteName)
















let LaCasaCamina = "dssihdisd"
let LaCasaCamina2 = prompt ("lolito 246")











console.log =("")