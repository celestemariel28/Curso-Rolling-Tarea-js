/*Calculadora simple:
El usuario ingresará dos valores y una operación a realizar (suma, resta, multiplicación, división) y se mostrará el resultado en consola de la operación entre los dos números.
Validar que el ingreso de los datos sea correcto. */

/*ALGORITMO */

/*ENTRADA: numero1, numero2, operador enteros
  SALIDA: resultado
  PROCEDIMIENTO:
                LEER numero1
                LEER operador
                LEER numero2
                SI operador == "+" ENTONCES:
                    ESCRIBIR numero 1 + numero2
                SINO SI operador == "-" ENTONCES:
                    ESCRIBIR numero1 - numero2
                SINO SI operado == "*" ENTONCES:
                    ESCRIBIR numero1 * numero2
                SINO:
                    ESCRIBIR numero1 % numero2*/

let num1 = Number(prompt("Ingrese un número: "));
let operador = prompt("Ingrese un operador (+, -, *, %): ");
let num2 = Number(prompt("Ingrese el segundo número: "));

if (operador === "+"){
    console.log("El resultado de la suma es: ", (num1 + num2));
}
else if (operador === "-"){
    console.log("El resultado de la resta es: ", (num1 - num2));
}
else if (operador === "*"){
    console.log("El resultado de la multiplicación es: ", (num1 * num2));
}
else{
    console.log("El resultado de la divición es: ", (num1 % num2));
}

/*OTRA FORMA */

/*switch(true){
    case operador === "+": console.log("El resultado de la suma es: ", num1 + num2);break;
    case operador === "-": console.log("El resultado de la resta es: ", num1 + num2);break;
    case operador === "*": console.log("El resultado de la multiplicación es: ", num1 + num2);break;
    default: console.log("El resultado de la divición es: ", num1 % num2);break;
}*/