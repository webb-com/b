// Get the brightness slider element
const brightnessSlider = document.getElementById('brightnessSlider');
// Get the body element to apply the brightness filter
const body = document.body;

// Add an event listener to the slider
brightnessSlider.addEventListener('input', (event) => {
    // Get the current value from the slider (a number from 0 to 100)
    const sliderValue = event.target.value;
    
    // Calculate the brightness percentage (0% to 100%)
    const brightnessLevel = sliderValue + '%';

    // Update the CSS variable on the body element
    // This will automatically change the 'filter' property
    body.style.setProperty('--brightness-level', brightnessLevel);
});
