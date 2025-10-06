/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
 */

let meses = ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","julio","Agosto","Septiempre","Octubre","Noviembre","Diciembre"];

for(let i=0; i<= meses.length-1;i++){
    console.log(i+1 + " "+meses[i]);
}

/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

- Mostrar la longitud del arreglo.
- Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
- Añade en última posición la ciudad de París.
- Escribe por pantalla el elemento que ocupa la segunda posición.
- Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades=[];
let ciudad;
let esVeradero = true
while(esVeradero){
    ciudad = prompt("Ingrese el nomrbe de la ciudad: ");
    if (ciudad===null){
        esVeradero = false;
    }

    if(ciudad != ""&& ciudad!==null){
        ciudades.push(ciudad);
    }
}
for(let i = 0; i <= ciudades.length -1;i++){
    console.log("\n" + ciudades[i]);
}

console.log("Longitud del arreglo: " + ciudades.length);
console.log("1ra posicion: " + ciudades[0]);
console.log("3ra posicion: " + ciudades[2]);
console.log("Ultima posicion: " + ciudades[ciudades.length-1]);
ciudades.push("Paris");
console.log("Agrego país: " + ciudades);
console.log("2da posicion: " + ciudades[1]);
ciudades.splice(1,1,"Barcelona")
console.log("Reemplazo la 2da posicion: " + ciudades);


/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */


let arregloSuma = [];
let apariciones = [2,3,4,5,6,7,8,9,10,11,12];

for(let i = 0; i<50; i++){
    let dado1 = Math.floor(Math.random()*6)+1;
    let dado2 = Math.floor(Math.random()*6)+1;
    suma = dado1+dado2
    arregloSuma.push(dado1+dado2);
    
}

console.log("Resultados de cada lanzamiento:", arregloSuma);

for(let i = 2;i<=12;i++){
    let contador = 0;
    for(let j = 0; j<50; i++){
        if(arregloSuma[j] === i){
            contador++;
        }
    }
    apariciones.push(contador);
}
console.log("Cantidad de apariciones: ");
for(let i = 0; i<apariciones.length; i++){
    
    console.log(i+2 + "aparece: " + apariciones[i] + " veces");
}