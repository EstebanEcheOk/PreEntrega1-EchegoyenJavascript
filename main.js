
document.addEventListener("DOMContentLoaded", function () {
    const principal = parseFloat(prompt("Ingrese monto que desea utilizar para el plazo fijo:"));
    const interesAnual = parseFloat(prompt("Ingrese la Tasa de Interés Anual (TNA) (%): Ej: Plazo fijo tradicional 133%")) / 100;
    const duracionMeses = parseInt(prompt("Ingresa el Plazo en meses:"));

        if (isNaN(principal) || isNaN(interesAnual) || isNaN(duracionMeses)) {
            console.log("Por favor, ingresa valores válidos.");
        } else {
            const interesGanado = principal * (interesAnual / 12) * duracionMeses;
            const montoTotal = principal + interesGanado;

            console.log("Resultados:");
            console.log(`Intereses ganados: $${interesGanado.toFixed(2)}`);
            console.log(`Monto final con intereses ganados: $${montoTotal.toFixed(2)}`);
        }
    });
