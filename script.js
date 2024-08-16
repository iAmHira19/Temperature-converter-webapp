document.getElementById('convertBtn').addEventListener('click', function () {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        if (unit === 'Celsius') {
            const fahrenheit = (temperature * 9/5) + 32;
            const kelvin = temperature + 273.15;
            result = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
        } else if (unit === 'Fahrenheit') {
            const celsius = (temperature - 32) * 5/9;
            const kelvin = (temperature - 32) * 5/9 + 273.15;
            result = `${temperature}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
        } else if (unit === 'Kelvin') {
            const celsius = temperature - 273.15;
            const fahrenheit = (temperature - 273.15) * 9/5 + 32;
            result = `${temperature}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
        }
    }

    document.getElementById('result').innerText = result;
});
