/**
 * Draws the current time in the console with a textual representation of a clock.
 */
function drawClock() {
    // Get the current date and time
    const now = new Date();

    // Extract hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the positions of the clock hands
    // `hourPosition` accounts for both hours and minutes
    const hourPosition = (hours % 12) + minutes / 60;
    // `minutePosition` accounts for both minutes and seconds
    const minutePosition = (minutes) + seconds / 60;
    // `secondPosition` is the current second
    const secondPosition = seconds;

    // Clear the console
    console.clear();

    // Generate the clock face in textual format
    console.log("      12");
    console.log(" 11       1 ");
    console.log("10         2");
    console.log(" 9         3");
    console.log(" 8         4");
    console.log("  7       5 ");
    console.log("      6");

    // Print the current time and hand positions
    console.log("\nCurrent Time: " + formatTime(hours, minutes, seconds));
    console.log("Hour Hand Position: " + hourPosition.toFixed(2));
    console.log("Minute Hand Position: " + minutePosition.toFixed(2));
    console.log("Second Hand Position: " + secondPosition.toFixed(2));
}

/**
 * Formats the time as a string in HH:MM:SS format.
 * 
 * @param {number} hours - The current hour.
 * @param {number} minutes - The current minutes.
 * @param {number} seconds - The current seconds.
 * @returns {string} The formatted time string.
 */
function formatTime(hours, minutes, seconds) {
    return (
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );
}

// Update the clock every second
setInterval(drawClock, 1000);

// Call the drawClock function immediately to avoid initial delay
drawClock();
