const displayInput = document.querySelector("#display");
const botones = document.querySelectorAll(".btn, .btn-plus, .equals, .operator, .clear");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;
        if (valor === "C") {
            displayInput.value = "0";
            return;
        }

        if (valor === "=") {
            let operador = displayInput.value.replace("×", "*"); 
            let resultado = 0;

            if (operador.includes("+")) {
                let partes = operador.split("+");
                resultado = Number(partes[0]) + Number(partes[1]);
            } else if (operador.includes("-")) {
                let partes = operador.split("-");
                resultado = Number(partes[0]) - Number(partes[1]);
            } else if (operador.includes("*")) {
                let partes = operador.split("*");
                resultado = Number(partes[0]) * Number(partes[1]);
            } else if (operador.includes("/")) {
                let partes = operador.split("/");
                if (Number(partes[1]) !== 0) {
                    resultado = Number(partes[0]) / Number(partes[1]);
                } else {
                    alert("No se puede dividir entre cero");
                    return;
                }
            } else if (operador.includes("√")) {
                let partes = operador.split("√");
                let numero = partes.find(p => p !== ""); 
                resultado = Math.sqrt(Number(numero));
            } else if (operador.includes("^")) {
                let partes = operador.split("^");
                resultado = Math.pow(Number(partes[0]),Number(partes[1]));
            } else if (operador.includes("%")) {
                let partes = operador.split("%");  
                let numero = Number(partes[0]);
                resultado = numero / 100;       
            }
        
            displayInput.value = resultado;
            return;
        }

        if (displayInput.value === "0") {
            displayInput.value = valor;
        } else {
            displayInput.value += valor;
        }
    });
});
