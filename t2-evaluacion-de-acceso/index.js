let edad = 19;
let tieneLicencia = true;
let esMayorDeEdad;
let puedeConducir;

if (edad >= 18){
    esMayorDeEdad = true;
    alert("Es mayor de edad");
    console.log("Tiene: " + edad + " años");
} else{
    alert("No se permiten personas de menor edad")
}

if(esMayorDeEdad == true && tieneLicencia == true ){
    puedeConducir = true;
    alert("Puede conducir");
    console.log("Puede conducir: " + puedeConducir);
}else{
    alert("No puede conducir")
}