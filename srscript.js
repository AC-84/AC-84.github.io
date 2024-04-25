document.addEventListener('DOMContentLoaded', function() {
    const colorPreview = document.getElementById('color-preview');
    const redSlider = document.getElementById('red-slider');
    const greenSlider = document.getElementById('green-slider');
    const blueSlider = document.getElementById('blue-slider');
    const submitButton = document.getElementById('submit-button');

    let targetColor = generateRandomColor();
    updateColorPreview();

    submitButton.addEventListener('click', function() {
        const userColor = getUserColor();
        const accuracy = calculateAccuracy(targetColor, userColor);
        alert(`Accuracy: ${accuracy.toFixed(2)}%`);
        targetColor = generateRandomColor();
        updateColorPreview();
    });

    function generateRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return { red, green, blue };
    }

    function updateColorPreview() {
        colorPreview.style.backgroundColor = `rgb(${targetColor.red}, ${targetColor.green}, ${targetColor.blue})`;
    }

    function getUserColor() {
        return {
            red: parseInt(redSlider.value),
            green: parseInt(greenSlider.value),
            blue: parseInt(blueSlider.value)
        };
    }

    function calculateAccuracy(targetColor, userColor) {
        const deltaRed = Math.abs(targetColor.red - userColor.red);
        const deltaGreen = Math.abs(targetColor.green - userColor.green);
        const deltaBlue = Math.abs(targetColor.blue - userColor.blue);
        const totalDelta = deltaRed + deltaGreen + deltaBlue;
        const maxDelta = 3 * 255; // Max possible delta for RGB values
        const accuracy = ((maxDelta - totalDelta) / maxDelta) * 100;
        return accuracy;
    }
});
