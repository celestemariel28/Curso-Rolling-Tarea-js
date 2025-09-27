/*Tarea 2

Ejercicio de Arrays (Carrera de Fórmula 1)

El array muestra el orden en que se arrancó la carrera y los puestos de cada piloto. Para cada acción se deben usar propiedades o métodos de los arrays vistos en clase.
Antes de la carrera se muestra la tabla en orden alfabético con los pilotos. No se debe modificar el array original.
Mostrar que pilotos vienen en el 3er y 5to puesto.
se sumaron tres pilotos más al final "Pierre Gasly","Valtteri Bottas","Lance Stroll"
"Lewis Hamilton" avanzó al primer puesto
Russel pasó al 6to puesto
"Carlos Sainz" tuvo desperfectos con el vehículo y salió de la carrera.
Alonso avanzó rápidamente al 2do puesto dejando fuera de la carrera al piloto que estaba en ese puesto.
Pérez se retrasó en Boxes y quedó en último lugar.
La carrera terminó y se muestra un mensaje con la lista de los pilotos que quedaron en el podio (los 3 primeros puestos)
 */
let pilotos = ["Jose Q", "Pérez", "Carlos Sainz","Alonso", "Russel","Lewis Hamilton", "Abngie C", "Milagros C",]

let pilotos_ordenados = pilotos.sort();

console.log("\nParticipantes ordenados alfabéticamente: ")
for(let i = 0; i < pilotos_ordenados.length; i++){
    console.log((i+1) + "°: " + pilotos_ordenados[i]);
}

console.log("\nel piloto que viene en el 3er puesto es: ", pilotos_ordenados[2]);
console.log("el piloto que viene en el 5to puesto es: ", pilotos_ordenados[4]);

console.log("\nSe sumaron tres pilotos más al final: ");
console.log(pilotos_ordenados.push("Pierre Gasly", "Valtteri Bottas", "Lance Stroll"));
for(let i = 0; i < pilotos_ordenados.length; i++){
    console.log((i+1) + "°: " + pilotos_ordenados[i]);
}

console.log("\nLewis Hamilton avanzó al primer puesto: ");
pilotos_ordenados.splice(4,1);
pilotos_ordenados.unshift("Lewis Hamilton");
for(let i = 0; i < pilotos_ordenados.length; i++){
    console.log((i+1) + "°: " + pilotos_ordenados[i]);
}

console.log("\nRussel pasó al 6to puesto: ");
pilotos_ordenados.splice(7,1);
pilotos_ordenados.splice(5,0,"Russel");
for(let i = 0; i < pilotos_ordenados.length; i++){
    console.log((i+1) + "°: " + pilotos_ordenados[i]);
}

console.log("\nCarlos Sainz tuvo desperfectos con el vehículo y salió de la carrera.")
pilotos_ordenados.splice(3,1);
for(let i = 0; i < pilotos_ordenados.length; i++){
    console.log((i+1) + "°: " + pilotos_ordenados[i]);
}

console.log("\nAlonso avanzó rápidamente al 2do puesto dejando fuera de la carrera al piloto que estaba en ese puesto. ");
pilotos_ordenados.splice(2,1);
pilotos_ordenados.splice(1,1,"Alonso");
for(let i = 0; i < pilotos_ordenados.length; i++){
    console.log((i+1) + "°: " + pilotos_ordenados[i]);
}

console.log("\nPérez se retrasó en Boxes y quedó en último lugar.");
pilotos_ordenados.splice(5,1);
pilotos.push("Pérez");
for(let i = 0; i < pilotos_ordenados.length; i++){
    console.log((i+1) + "°: " + pilotos_ordenados[i]);
}

console.log("\nLista de los pilotos que quedaron en el podio: ")
for(let i = 0; i < 3; i++){
    console.log((i+1) + ": " + pilotos_ordenados[i]);
}