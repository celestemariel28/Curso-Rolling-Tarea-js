/*Tarea 1

Ejercicio integrador: Contraseña segura 

Crea un programa en javascript que pida al usuario que ingrese una contraseña. 

El programa debe: 

Revisar que la contraseña tenga al menos 6 caracteres
Usar un bucle para recorrer cada caracter y verificar:
Si contiene al menos una mayúscula
Si contiene al menos un número.
Si cumple con todos los requisitos mostrar 'Contraseña válida ✅'
Si no cumple, mostrrar "Contraseña inválida ❌" y explicar porqué. */

/*-------------------------------------------------------------------------
ALGORITMO: Contraseña segura 
ENTRADA: contraseña de tipo string
SALIDA: mensaje si la contraseña es valida o no
AUXILIARES: esMayusc, esNum booleanos; i entero >=0
PROCEDIMIENTO:
                LEER contrasenia
                HACER len(contrasenia) VECES:
                    SI contrasenia[i] esMayuscula ENTONCES:
                        esMayusc = TRUE
                    FIN SI
                    SI contrasenia[i] esNumero ENTONCES
                        esNum = TRUE
                    FIN SI
                FIN HACER
                SI esMayusc y esNum ENTONCES:
                    ESCRIBIR Contraseña válida ✅
                SINO
                    ESCRIBIR Contraseña inválida ❌
-------------------------------------------------------------------------*/


let contrasenia = prompt("Ingrese la contraseña con almenos una mayúscula y un numero: ");

if(contrasenia === null || contrasenia.trim() === ""){
        console.log("La contraseña no debe ser vacia");
}else{
    let esMayusc = false;
    let esNum = false;

    for(let i = 0; i < contrasenia.length; i++){
        if (contrasenia[i] === contrasenia[i].toUpperCase() && contrasenia[i] !== contrasenia[i].toLowerCase()){
            esMayusc = true;
        }
        if (/[0-9]/.test(contrasenia[i])){
            esNum = true;
        }
    }

    if (esMayusc && esNum ){
        console.log("Contraseña válida ✅");
    }else{
        console.log("Contraseña inválida ❌, debe tener almenos una mayúscula y un numero");
    }
}
