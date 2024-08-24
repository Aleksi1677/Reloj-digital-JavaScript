function drawClock() {
    const now = new Date();

    // Obtener horas, minutos y segundos
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calcular las posiciones de las manecillas
    const hourPosition = (hours % 12) + minutes / 60;
    const minutePosition = (minutes) + seconds / 60;
    const secondPosition = seconds;

    // Generar el reloj en formato de texto
    console.clear();
    console.log("      12");
    console.log(" 11       1 ");
    console.log("10         2");
    console.log(" 9         3");
    console.log(" 8         4");
    console.log("  7       5 ");
    console.log("      6");

    console.log("\nHora actual: " + formatTime(hours, minutes, seconds));
    console.log("Manecilla de la hora: " + hourPosition.toFixed(2));
    console.log("Manecilla del minuto: " + minutePosition.toFixed(2));
    console.log("Manecilla del segundo: " + secondPosition.toFixed(2));
}

function formatTime(hours, minutes, seconds) {
    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );
}

// Actualizar el reloj cada segundo
setInterval(drawClock, 1000);

drawClock(); // Llamar la función inmediatamente para evitar el retraso inicial
