
/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 */
const esPar = function(numero = prompt("Ingrese un numero: x    x   ")){
    if(numero%2 == 0){
        console.log("El numero ingresado es par");
    }
    else{
        console.log("El número ingresado es impar");
    }
}

/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

function informacionCadena(cadena){
    if(cadena === cadena.toUpperCase()){
        console.log("La cadena está formada por mayúsculas");
    }
    else if(cadena == cadena.toLowerCase()){
        console.log("La cadena está formada por minúsculas");
    }
    else{
        console.log("La cadena está formada por mayúsculas y minúsculas");
    }
}
cadena1 = "CELESTE";
cadena2 = "CElesTe";
cadena3 = "celeste"

informacionCadena(cadena3);


/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/
let ladoA = prompt("Ingrese el lado a del rectángulo: ");
let ladoB = prompt("Ingrese el lado B del rectángulo: ");

const perimetroRectangulo = (ladoA = Number(prompt("Ingrese el lado a del rectángulo: ")),ladoB = Number(prompt("Ingrese el lado B del rectángulo: "))) => console.log("El perímetro del rectangulo es: " + 2*(ladoA + ladoB));

/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

const tablaDeMultiplicar = function(numero = Number(prompt("Ingrese el numero para ver su tabla de multiplicar: "))){
    for(let i = 0; i<=10;i++){
        console.log(numero + "x "+i + " = "+ (numero*i));
    }
}

