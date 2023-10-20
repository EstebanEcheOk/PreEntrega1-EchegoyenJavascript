function calcularPlazoFijo() {
    let continuar = true;

    while (continuar) {
        let principal, interesAnual, duracionMeses;

        do {
            principal = parseFloat(prompt("Ingrese el monto que desea utilizar para el plazo fijo:"));
            if (isNaN(principal) || principal < 0) {
                alert("Por favor, ingrese un valor válido y positivo para el monto.");
            }
        } while (isNaN(principal) || principal < 0);

        do {
            interesAnual = parseFloat(prompt("Ingrese la Tasa de Interés Anual (TNA) (%): Ej: Plazo fijo tradicional 133%")) / 100;
            if (isNaN(interesAnual) || interesAnual < 0) {
                alert("Por favor, ingrese un valor válido y positivo para la tasa de interés anual.");
            }
        } while (isNaN(interesAnual) || interesAnual < 0);

        do {
            duracionMeses = parseInt(prompt("Ingresa el Plazo en meses:"));
            if (isNaN(duracionMeses) || duracionMeses < 0) {
                alert("Por favor, ingrese un valor válido y positivo para la duración en meses.");
            }
        } while (isNaN(duracionMeses) || duracionMeses < 0);

    
        const interesGanado = principal * (interesAnual / 12) * duracionMeses;
        const montoTotal = principal + interesGanado;

        console.log("Resultados:");
        console.log(`Intereses ganados: $${interesGanado.toFixed(2)}`);
        console.log(`Monto final con intereses ganados: $${montoTotal.toFixed(2)}`);
        
        
        const decision = prompt("Desea realizar otro cálculo de plazo fijo? (Si/No)").toLowerCase();
        continuar = decision === "si" || decision === "sí";
    }
}

calcularPlazoFijo();

