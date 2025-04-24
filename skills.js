// Farenhite to cencious function
function farenheitToCelsius(farenheit) {
    return (farenheit - 32) * 5 / 9;
}
// Celsius to farenheit function
function celsiusToFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// driver code
let farenheit = 100;
let celsius = 37.7778;
console.log(`${farenheit}°F is equal to ${farenheitToCelsius(farenheit).toFixed(2)}°C`);
console.log(`${celsius}°C is equal to ${celsiusToFarenheit(celsius).toFixed(2)}°F`);